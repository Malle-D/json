let fragment = document.createDocumentFragment()

function renderUser(base, list) {
   
   list.innerHTML = null
   
   base.forEach(element => {
      
      let newItem = document.createElement("li")
      let newUserBox = document.createElement("div")
      let newNameBox = document.createElement("div")
      let newIdBox = document.createElement("div")
      let newAddressBox = document.createElement("div")
      let newLocationBox = document.createElement("div")
      let newPhoneBox = document.createElement("div")
      let newCompanyBox = document.createElement("div")

      let newName = document.createElement("h2")
      let newUser = document.createElement("h3")
      let newId = document.createElement("strong")
      let newMail = document.createElement("a")

      let newTitle = document.createElement("h3")
      let newDesc = document.createElement("p")
      let newLocationLink = document.createElement("a")
      let newZipSpan = document.createElement("span")
      
      let newPhoneLink = document.createElement("a")
      let newWebLink = document.createElement("a")

      let newCompTitle = document.createElement("h3")
      let newCompDesc = document.createElement("p")
      let newCompServise = document.createElement("p")

      newName.textContent = element.name
      newUser.textContent = "@" + element.username
      newId.textContent = `ID: ${element.id}`
      newMail.textContent = "User Email"
      newTitle.textContent = "Address:"
      newDesc.textContent = `${element.address.city}, ${element.address.street}, ${element.address.suite}`
      newLocationLink.textContent = "Location"
      newZipSpan.textContent = "Zip-Code: " +element.address.zipcode
      newPhoneLink.textContent = element.phone
      newWebLink.textContent = "Web Site"
      newCompTitle.textContent = "Company:"
      newCompDesc.textContent = `"${element.company.name}"`
      newCompServise.textContent = element.company.catchPhrase

      newItem.setAttribute("class", "user-list__item user")
      newUserBox.setAttribute("class", "user__box")
      newId.setAttribute("class", "user__id")
      newMail.setAttribute("class", "user__mail")
      newMail.setAttribute("href", "mailto:" + element.email)
      newMail.setAttribute("target","blank")
      newIdBox.setAttribute("class", "user__id-box")

      newAddressBox.setAttribute("class", "user__address address")
      newTitle.setAttribute("class", "address__title")
      newDesc.setAttribute("class", "address__desc")
      newZipSpan.setAttribute("class", "address__zip")
      newLocationLink.setAttribute("class", "address__location")
      newLocationLink.setAttribute("href",`https://www.google.com/maps/place/${element.address.geo.lat},${element.address.geo.lng}`)
      newLocationLink.setAttribute("target","blank")
      
      newPhoneBox.setAttribute("class", "user__links links")
      newPhoneLink.setAttribute("class", "links__tel")
      newWebLink.setAttribute("class", "links__web")
      newPhoneLink.setAttribute("href",`tel:${element.phone}`)
      newPhoneLink.setAttribute("target","blank")
      newWebLink.setAttribute("href",element.website)
      newWebLink.setAttribute("target","blank")

      newCompanyBox.setAttribute("class", "user-list__company company")
      newCompTitle.setAttribute("class", "company__title")
      newCompDesc.setAttribute("class", "company__describe")
      newCompServise.setAttribute("class", "company__servise")

      newUser.style.cursor = "pointer"
      newUser.style.display = "inline-block"
      newLocationBox.style.display = "flex"

      newItem.dataset.userId = element.id
      
      newNameBox.appendChild(newName)
      newNameBox.appendChild(newUser)
      newIdBox.appendChild(newId)
      newIdBox.appendChild(newMail)
      newUserBox.appendChild(newNameBox)
      newUserBox.appendChild(newIdBox)

      newAddressBox.appendChild(newTitle)
      newAddressBox.appendChild(newDesc)
      newAddressBox.appendChild(newLocationBox)
      newLocationBox.appendChild(newLocationLink)
      newLocationBox.appendChild(newZipSpan)

      newPhoneBox.appendChild(newPhoneLink)
      newPhoneBox.appendChild(newWebLink)

      newCompanyBox.appendChild(newCompTitle)
      newCompanyBox.appendChild(newCompDesc)
      newCompanyBox.appendChild(newCompServise)

      newItem.appendChild(newUserBox)
      newItem.appendChild(newAddressBox)
      newItem.appendChild(newPhoneBox)
      newItem.appendChild(newCompanyBox)

      fragment.appendChild(newItem)
      
   });
   
   list.appendChild(fragment)
   
}

function renderPost(base, list) {

   list.innerHTML = null

   base.forEach(element => {

      let newItem = document.createElement("li")
      let newTitle = document.createElement("h3")
      let newBody = document.createElement("p")

      newTitle.textContent = element.title
      newBody.textContent = element.body

      newItem.setAttribute("class", "posts-list__item post")
      newItem.dataset.postId = element.id
      newTitle.setAttribute("class", "posts__title")
      newBody.setAttribute("class", "posts__body")

      newItem.appendChild(newTitle)
      newItem.appendChild(newBody)
      fragment.appendChild(newItem)

   })

   list.appendChild(fragment)

}

function renderComment(base, list) {

   list.innerHTML = null

   base.forEach(element => {

      let newItem = document.createElement("li")
      let newTitle = document.createElement("h3")
      let newBody = document.createElement("p")
      let newMailCase = document.createElement("div")
      let newMail = document.createElement("a")

      newTitle.textContent = element.name
      newBody.textContent = element.body
      newMail.textContent = element.email

      newItem.setAttribute("class", "comments-list__item comment")
      newItem.dataset.postId = element.id
      newTitle.setAttribute("class", "comment__name")
      newBody.setAttribute("class", "comment__body")
      newMail.setAttribute("href", "mailto:" + element.email)
      newMail.setAttribute("target", "blank")
      newMailCase.setAttribute("class", "comment__mail-case")
      newMail.setAttribute("class", "comment__mail")

      newMailCase.appendChild(newMail)
      newItem.appendChild(newTitle)
      newItem.appendChild(newBody)
      newItem.appendChild(newMailCase)
      fragment.appendChild(newItem)

   })

   list.appendChild(fragment)

}