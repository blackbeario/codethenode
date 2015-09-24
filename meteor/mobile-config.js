App.info({
    // id: 'com.teamttipop.ttitestingapp',
    // name: 'TTi-testing',
    // id: 'com.teamttipop.ttistagingapp',
    // name: 'TTi-staging',
    id: 'com.teamttipop.ttiapp',
    name: 'Team TTi',
    description: 'Mobile app for TTi',
    author: 'Josh Owens',
    email: 'joshua.owens@gmail.com',
    website: 'https://tti.knowclassic.com',
    version: '1.0.3'
});

App.icons({
  // iOS
  'iphone': 'resources/ios/Icon-60.png',
  'iphone_2x': 'resources/ios/Icon-60@2x.png',
  'iphone_3x': 'resources/ios/Icon-60@3x.png',
  'ipad': 'resources/ios/Icon-76.png',
  'ipad_2x': 'resources/ios/Icon-76@2x.png'
});

// App.preference({'Orientation': 'portrait'});
App.accessRule('https://tti-staging.knowclassic.com:443/*');
App.accessRule('https://tti-staging.knowclassic.com/*');
App.accessRule('https://tti-staging.knowclassic.com:8443/*');
App.accessRule('https://tti-test.knowclassic.com/*');
App.accessRule('https://tti.knowclassic.com/*');
App.accessRule('https://tti.knowclassic.com:8443/*');
App.accessRule('https://www.teamttipop.com/*');
App.accessRule('https://contacts.milwaukeetool.com/*');
App.accessRule('https://www.milwaukeetool.com/*');
App.accessRule('https://www.ryobitools.com/*');
App.accessRule('https://www.ridgid.com/*');
App.accessRule('https://www.youtube.com/*');
App.accessRule('https://m.youtube.com/*');
App.accessRule('https://accounts.google.com/*');
App.accessRule('https://s.ytimg.com/*');
App.accessRule('https://register.ridgidpower.com/*');
App.accessRule('https://enginex.kadira.io/*');
