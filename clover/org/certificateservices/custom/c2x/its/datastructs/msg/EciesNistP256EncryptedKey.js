var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":182,"id":2735,"methods":[{"el":67,"sc":2,"sl":56},{"el":76,"sc":2,"sl":74},{"el":83,"sc":2,"sl":81},{"el":90,"sc":2,"sl":88},{"el":97,"sc":2,"sl":95},{"el":104,"sc":2,"sl":102},{"el":111,"sc":2,"sl":109},{"el":119,"sc":2,"sl":114},{"el":130,"sc":2,"sl":121},{"el":144,"sc":2,"sl":132},{"el":167,"sc":2,"sl":146},{"el":175,"sc":2,"sl":169}],"name":"EciesNistP256EncryptedKey","sl":38}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_126":{"methods":[{"sl":56},{"sl":132},{"sl":146}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":57},{"sl":60},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":134},{"sl":135},{"sl":136},{"sl":137},{"sl":141},{"sl":142},{"sl":143},{"sl":148},{"sl":149},{"sl":150},{"sl":152},{"sl":154},{"sl":155},{"sl":157},{"sl":159},{"sl":161},{"sl":164},{"sl":165}]},"test_143":{"methods":[{"sl":114}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":116},{"sl":117},{"sl":118}]},"test_164":{"methods":[{"sl":74},{"sl":121}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":75},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128}]},"test_186":{"methods":[{"sl":56},{"sl":81},{"sl":95},{"sl":102},{"sl":109}],"name":"Verify that eCEISEncryptSymmetricKey and eCEISDecryptSymmetricKey encrypts and decrypts symmetric key correcly.","pass":true,"statements":[{"sl":57},{"sl":60},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":82},{"sl":96},{"sl":103},{"sl":110}]},"test_199":{"methods":[{"sl":74},{"sl":81},{"sl":88},{"sl":95},{"sl":102},{"sl":109}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":75},{"sl":82},{"sl":89},{"sl":96},{"sl":103},{"sl":110}]},"test_234":{"methods":[{"sl":114}],"name":"Verify serialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":116},{"sl":117},{"sl":118}]},"test_263":{"methods":[{"sl":169}],"name":"Verify toString","pass":true,"statements":[{"sl":171}]},"test_266":{"methods":[{"sl":169}],"name":"Verify toString","pass":true,"statements":[{"sl":171}]},"test_313":{"methods":[{"sl":169}],"name":"Verify toString","pass":true,"statements":[{"sl":171}]},"test_339":{"methods":[{"sl":56},{"sl":74},{"sl":81},{"sl":95},{"sl":102},{"sl":109},{"sl":114},{"sl":121}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":57},{"sl":60},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":75},{"sl":82},{"sl":96},{"sl":103},{"sl":110},{"sl":116},{"sl":117},{"sl":118},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128}]},"test_340":{"methods":[{"sl":114}],"name":"Verify serialization","pass":true,"statements":[{"sl":116},{"sl":117},{"sl":118}]},"test_381":{"methods":[{"sl":74},{"sl":121}],"name":"Verify deserialization","pass":true,"statements":[{"sl":75},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128}]},"test_386":{"methods":[{"sl":56},{"sl":132},{"sl":146}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":57},{"sl":60},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":134},{"sl":135},{"sl":136},{"sl":137},{"sl":141},{"sl":142},{"sl":143},{"sl":148},{"sl":150},{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":164},{"sl":165},{"sl":166}]},"test_401":{"methods":[{"sl":56},{"sl":74},{"sl":81},{"sl":95},{"sl":102},{"sl":109},{"sl":114},{"sl":121}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":57},{"sl":60},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":75},{"sl":82},{"sl":96},{"sl":103},{"sl":110},{"sl":116},{"sl":117},{"sl":118},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128}]},"test_52":{"methods":[{"sl":74}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":75}]},"test_61":{"methods":[{"sl":74},{"sl":81},{"sl":88},{"sl":95},{"sl":102},{"sl":109},{"sl":121}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":75},{"sl":82},{"sl":89},{"sl":96},{"sl":103},{"sl":110},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [186, 339, 126, 386, 401], [186, 339, 126, 386, 401], [], [], [186, 339, 126, 386, 401], [], [], [186, 339, 126, 386, 401], [186, 339, 126, 386, 401], [186, 339, 126, 386, 401], [186, 339, 126, 386, 401], [], [], [], [], [], [], [], [199, 339, 381, 61, 52, 164, 401], [199, 339, 381, 61, 52, 164, 401], [], [], [], [], [], [186, 199, 339, 61, 401], [186, 199, 339, 61, 401], [], [], [], [], [], [199, 61], [199, 61], [], [], [], [], [], [186, 199, 339, 61, 401], [186, 199, 339, 61, 401], [], [], [], [], [], [186, 199, 339, 61, 401], [186, 199, 339, 61, 401], [], [], [], [], [], [186, 199, 339, 61, 401], [186, 199, 339, 61, 401], [], [], [], [339, 143, 340, 234, 401], [], [339, 143, 340, 234, 401], [339, 143, 340, 234, 401], [339, 143, 340, 234, 401], [], [], [339, 381, 61, 164, 401], [], [339, 381, 61, 164, 401], [339, 381, 61, 164, 401], [339, 381, 61, 164, 401], [339, 381, 61, 164, 401], [339, 381, 61, 164, 401], [339, 381, 61, 164, 401], [], [], [], [126, 386], [], [126, 386], [126, 386], [126, 386], [126, 386], [], [], [], [126, 386], [126, 386], [126, 386], [], [], [126, 386], [], [126, 386], [126], [126, 386], [], [126, 386], [], [126, 386], [126, 386], [386], [126, 386], [], [126, 386], [386], [126, 386], [], [], [126, 386], [126, 386], [386], [], [], [266, 263, 313], [], [266, 263, 313], [], [], [], [], [], [], [], [], [], [], []]