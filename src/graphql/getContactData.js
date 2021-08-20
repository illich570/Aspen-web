const getContactData = `
{
  contactSections(first: 1){
    address
    addressIcon{
      url
    }
    phoneContact
    phoneIcon{
      url
    }
    email
    emailIcon{
      url
    }
  }
}`

export default getContactData
