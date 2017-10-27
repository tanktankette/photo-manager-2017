const faker = require('faker')
const md5 = require('blueimp-md5')
const fetch = require('node-fetch')
const avatarGenerator = require('avatar-generator')({
  order: 'background face clothes head hair eye mouth'.split(' '),
  images: require('path').join(__dirname, './node_modules/avatar-generator/img'), // path to sprites 
  convert: 'convert'
})

fetch('https://test-c7f46.firebaseio.com/thing.json', {method: 'DELETE'}).then(() => {
  for (let i = 0; i < 100; i++) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = faker.internet.email()
    const address = faker.address.streetAddress()
    const state = faker.address.state()
    const city = faker.address.city()
    const zip = faker.address.zipCode()
    const country = faker.address.country()
    const passwordHash = md5(faker.internet.password())

    avatarGenerator(md5(firstName + lastName), Math.random() < 0.5 ? 'male' : 'female', 100)
      .toBuffer(function (err, buffer) {
        if (err) {}
        const avatar = 'data:image/png;base64,' + buffer.toString('base64')
        const pkg = {
          method: 'POST',
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            address,
            state,
            city,
            zip,
            country,
            avatar,
            passwordHash
          })
        }
        fetch('https://test-c7f46.firebaseio.com/thing.json', pkg).then(console.log)
      })
  }
})
