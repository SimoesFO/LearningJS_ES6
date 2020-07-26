class App {

  constructor() {
    this.repositories = []
    
    this.formEl = document.getElementById('repo-form')
    this.inputEl = document.querySelector('input[name=repository]')
    this.listEl = document.getElementById('repo-list')
    this.buttonEl = document.querySelector('button[type=submit]')

    this.registerHandlers();
  }


  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event)
  }


  async addRepository(event) {
    event.preventDefault()

    try {
      const repoInput = this.inputEl.value

      if(repoInput.length === 0) return

      this.setLoading();

      let response = await this.getDataGitHub(repoInput)

      const { name, html_url, description, blog, owner: { avatar_url } = {}, avatar_url: avatar_url_user } = response

      let avatar = avatar_url || avatar_url_user 
      let content = description || blog

      this.repositories.push({
        name,
        description: content,
        avatar_url: avatar,
        html_url
      })

      this.render()
    }
    catch(error) {
      alert('Repository not found')
    }

    this.setLoading(false);
  }


  getDataGitHub(repository) {
    
    let BASE_URL = 'https://api.github.com/'
    
    if( repository.includes('/') ) {
      BASE_URL += 'repos/'
    }
    else {
      BASE_URL += 'users/'
    }

    return fetch(BASE_URL+repository)
        .then(response => response.json())
        .then(data => data)
  }


  setLoading(loading = true) {
    if( loading === true) {
      this.buttonEl.innerHTML = 'Carregando...'
      this.buttonEl.disabled = true
    }
    else {
      this.buttonEl.innerHTML = 'Adicionar'
      this.buttonEl.disabled = false
    }
  }


  render() {
    this.inputEl.value = ''
    this.listEl.innerHTML = ''

    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img')
      imgEl.setAttribute( 'src', repo.avatar_url )

      let titleEl = document.createElement('strong')
      titleEl.appendChild( document.createTextNode(repo.name) )

      let descriptionEl = document.createElement('p')
      descriptionEl.appendChild( document.createTextNode(repo.description) )

      let linkEl = document.createElement('a')
      linkEl.setAttribute('href', repo.html_url)
      linkEl.setAttribute('target', '_blank')
      linkEl.appendChild( document.createTextNode('Acessar'))

      let listItemEl = document.createElement('li')
      listItemEl.appendChild(imgEl)
      listItemEl.appendChild(titleEl)
      listItemEl.appendChild(descriptionEl)
      listItemEl.appendChild(linkEl)

      this.listEl.appendChild(listItemEl)

    })
  }
}

new App()