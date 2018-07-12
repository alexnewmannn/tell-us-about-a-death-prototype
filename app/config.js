// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
  // Service name used in header. Eg: 'Renew your passport'
  serviceName: 'Tell us about a death',

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Enable or disable built-in docs and examples.
  useDocumentation: 'true',

  // Force HTTP to redirect to HTTPS on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'GOV.UK uses cookies to make the site simpler. <a href="#">Find out more about cookies</a>',

  // Enable or disable Browser Sync
  useBrowserSync: 'true',

  searchResults: [ // These prop names aren't ideal
    {
      nino: 'FA119533X',
      name: 'John Doe',
      deceased: true,
      dateOfDeath: '11/07/2015',
      dateOfBirth: '08/01/1995',
      line1: 'Benton Park View',
      town: 'Newcastle Upon Tyne',
      county: 'Tyne and Wear',
      postcode: 'NE98 1ZZ',
      notifier: {
        name: 'Janet Doe',
        leafletCode: 'AB1234',
        relationshipToDeceased: 'wife',
        line1: 'Benton Park View',
        town: 'Newcastle Upon Tyne',
        county: 'Tyne and Wear',
        postcode: 'NE98 1ZZ',
        phoneNumber: '077911234567'
      }
    },
    {
      nino: 'DA016292D',
      name: 'Janet Doe',
      deceased: true,
      dateOfDeath: '27/02/2018',
      dateOfBirth: '22/05/1996',
      line1: 'Benton Park View',
      town: 'Newcastle Upon Tyne',
      county: 'Tyne and Wear',
      postcode: 'NE98 1ZZ',
      notifier: {
        name: 'Jimmy Doe',
        leafletCode: 'BC6546',
        relationshipToDeceased: 'son',
        line1: 'Benton Park View',
        town: 'Newcastle Upon Tyne',
        county: 'Tyne and Wear',
        postcode: 'NE98 1ZZ',
        phoneNumber: '01670123456'
      }
    },
    {
      nino: 'IB987753Y',
      name: 'Guy Incognito',
      deceased: true,
      dateOfDeath: '03/04/1986',
      dateOfBirth: '12/05/1956',
      line1: '742 Evergreen Terrace',
      town: 'Springfield',
      county: 'Northumberland',
      postcode: 'NE24 4N9',
      notifier: {
        name: 'Marge Incognito',
        leafletCode: 'JH7423',
        relationshipToDeceased: 'wife',
        line1: '742 Evergreen Terrace',
        town: 'Springfield',
        county: 'Northumberland',
        postcode: 'NE24 4N9',
        phoneNumber: '074236734443'
      }
    },
    {
      nino: 'DA125341O',
      name: 'Eliza Lester',
      deceased: true,
      dateOfDeath: '31/12/2001',
      dateOfBirth: '19/04/1987',
      line1: 'Benton Park View',
      town: 'Newcastle Upon Tyne',
      county: 'Tyne and Wear',
      postcode: 'NE98 1ZZ',
      notifier: {
        name: 'Bart Incognito',
        leafletCode: 'XX6443',
        relationshipToDeceased: 'nurse',
        line1: '742 Evergreen Terrace',
        town: 'Springfield',
        county: 'Northumberland',
        postcode: 'NE24 4N9',
        phoneNumber: '07423673455553'
      }
    }
  ]
}
