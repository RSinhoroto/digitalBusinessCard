const socialMediaUsername = {
  github: 'RSinhoroto',
  youtube: '@rsinhoroto',
  facebook: '',
  instagram: 'rsinhoroto',
  twitter: 'rsinhoroto',
  tiktok: '@rsinhoroto'
}

function updateSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMediaUsername[social]}`
  }
}

updateSocialMediaLinks()


function getGithubUserInfo () {

  const url = `https://api.github.com/users/${socialMediaUsername.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    cardName.textContent = data.name
    cardBio.textContent = data.bio
    cardLink.href = data.html_url
    cardPhoto.src = data.avatar_url
    cardUser.textContent = data.login

    cardTitle.textContent = `${data.name.split(' ')[0]}'s Digital Business Card`
  })

}

getGithubUserInfo()
