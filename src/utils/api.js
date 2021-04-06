class Api {
  constructor(config) {
    this._url = config.url
    this.headers = config.headers;
  }

  loadUser() {
    return fetch(`${this._url}users/me/`, {
      method: "GET",
      headers: this.headers
    })
    .then((res)=>{

      if(res.ok) {
        return res.json()
      }
      return Promise.reject('AAAA,все сломалось!');
    })
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: this.headers
    })
    .then((res)=>{
      if(res.ok) {
        return res.json()
      }
      return Promise.reject('AAAA,все сломалось!');
    })
  }

  updateAvatar(formData) {
    return fetch(`${this._url}users/me/avatar`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
            avatar: formData.avatar
        })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject('AAAA,все сломалось!');
    })
  }

  updateUserInfo(formData) {
    return fetch(`${this._url}users/me`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
            name: formData.name,
            about: formData.about,
            avatar: formData.avatar
        })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject('AAAA,все сломалось!');
    })
  }

  addCard(formData) {
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: formData.name,
        link: formData.link
      })
    })
    .then((res)=>{
      if(res.ok) {
        return res.json()
      }
      return Promise.reject('AAAA,все сломалось!');
    })
  }

    changeLikeCardStatus(id, isLiked) {
      return fetch(`${this._url}cards/likes/${id}`, {
            method: isLiked ? 'PUT' : 'DELETE',
            headers: this.headers
        })
        .then(res => {
          if (res.ok) {
              return res.json();
          }
          return Promise.reject('AAAA,все сломалось!');
      })
     }

  removeCard(id) {
    return fetch(`${this._url}cards/${id}`, {
        method: 'DELETE',
        headers: this.headers
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject('AAAA,все сломалось!');
    })
  }
}

export const api = new Api ({
  url: "https://mesto.nomoreparties.co/v1/cohort-20/",
  headers: {
      "content-type": "application/json",
      "Authorization" : "3070922a-3883-4050-b75d-7ef694125bdc"
  }
})
