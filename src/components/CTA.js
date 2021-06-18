import React, { useEffect } from 'react'

const airdrops = [
  {
      "address": "0x52ce1a8e289a10e86dd4c6e37381a67a139e62bd",
      "tokens": 100025.08787732836
  },
  {
      "address": "0xd9b57c2d974cddd14547617d988668f1d731ad8e",
      "tokens": 98684.49328271655
  },
  {
      "address": "0x47a01fcb08c8e7e29edfe53e5824b79eaf5cf6e2",
      "tokens": 98019.06579432926
  },
  {
      "address": "0xa9a485125527bcee3ca601f0c2cb35f4a860980c",
      "tokens": 95481.66482434432
  },
  {
      "address": "0xa9caabe46d753c9708f3df77919388b82186a060",
      "tokens": 91933.6608094152
  },
  {
      "address": "0x207d898557f9a103b3911187e8f46083a9ecfa76",
      "tokens": 90861.50663872731
  },
  {
      "address": "0x414533f66a8359db22c3b74733826fdfe7fcc72f",
      "tokens": 90559.84391633871
  },
  {
      "address": "0x2564b49651db0dbb72ecf8d2c83383a3bfae76b0",
      "tokens": 89949.4450363236
  },
  {
      "address": "0x78da2abd5bd1ea968efbfd94e451904b73fd72b6",
      "tokens": 87874.97723968278
  },
  {
      "address": "0x0aa6a30017cd6c0f704968eb9bdb1eb353dcca4e",
      "tokens": 86158.33807661693
  },
  {
      "address": "0x268070d5eed5b24e34a5f4c17b5482178b18089d",
      "tokens": 85156.12502819387
  },
  {
      "address": "0xac03fed2411f49eb690b07214ff4ff774af60b2c",
      "tokens": 84976.33031214074
  },
  {
      "address": "0xfc5d26a203a188876dee645d8dbba21c605c187d",
      "tokens": 84042.28403413437
  },
  {
      "address": "0x5d2a62d3d1f6bb323ff1c0c33f33d489adabbc7a",
      "tokens": 83168.50574731917
  },
  {
      "address": "0xf1270ffb9dacdc5c0e0c176dea72f69047a34b81",
      "tokens": 80422.15587668418
  },
  {
      "address": "0x3d3c415c7ba237e0209601168fd8315d5980792e",
      "tokens": 80265.83792438211
  },
  {
      "address": "0x38b80b7032fba3a96404402aa4cdee741fe74502",
      "tokens": 79818.64727428707
  },
  {
      "address": "0xa789b08c4cbc20c48ab5a96c541063c6782b1ad9",
      "tokens": 79146.00736423343
  },
  {
      "address": "0xa5999d3ec061e70f29055044ccc5d8a9ecad8c15",
      "tokens": 77274.42515082286
  },
  {
      "address": "0x07b396f4dd91c1363263671ff76e63f87f9a3a99",
      "tokens": 77585.53333706646
  },
  {
      "address": "0x498411bb32776a68536fd1abc91a776564ecfb91",
      "tokens": 77340.12201333263
  },
  {
      "address": "0x60e15de5b3304d4381517745941975ce0327c649",
      "tokens": 76442.75816513333
  },
  {
      "address": "0xbecbd1746fa3d0ebfc14053db70ca6cdc2d87738",
      "tokens": 75501.25175554292
  },
  {
      "address": "0x2abf9fee1541e6f513fdf75d624ac7fc2c3de159",
      "tokens": 74419.09020461161
  },
  {
      "address": "0x1b67426421669df8ee0cbdbc43980682f02c767e",
      "tokens": 74261.98338270422
  },
  {
      "address": "0xe99c16070c6e4bf2ca1597c68cf79a90b9f7c1d7",
      "tokens": 73984.05376594051
  },
  {
      "address": "0xcfa95b092d766c3ab5a394f210369e5389aa01d6",
      "tokens": 73907.08308530526
  },
  {
      "address": "0xab777eb4cbbb7341541158b60952572539d72f8d",
      "tokens": 73743.05230755339
  },
  {
      "address": "0x8f4495c2873600fbe077a1a580b85de236db6283",
      "tokens": 63060.48983767667
  },
  {
      "address": "0x9089a5b806f28b2ea1c7afb9039196650d9fd034",
      "tokens": 72665.63438226149
  },
  {
      "address": "0x654206ed884d57a81d020ae61563e39e56b4c474",
      "tokens": 72048.62013965334
  },
  {
      "address": "0x14759760de9069ce8713ab69df7a041a8ec5e546",
      "tokens": 71892.48872883437
  },
  {
      "address": "0xfa03ce4a1c5df6999b0fb6ef9bdae404d35f7924",
      "tokens": 71419.81142622541
  },
  {
      "address": "0x5ca2d441f9e2dd32c950e4a3367a962e3e892d68",
      "tokens": 70707.08671393173
  },
  {
      "address": "0xef663ae4d0414fcecc5bfb358044f24f576ecfed",
      "tokens": 70597.09153979277
  },
  {
      "address": "0x37d81a9133d1c444d23ae6061009f974a3b6e3ff",
      "tokens": 69928.69857255324
  },
  {
      "address": "0x657307839b6bfd4fc1d1f96e164fa20ea33e57d3",
      "tokens": 69645.54698872972
  },
  {
      "address": "0x8d20845a2a0fe04b3f3054375692ce62601f1e52",
      "tokens": 23708.893380300815
  },
  {
      "address": "0x61f9999b33b567bf4a64028645916d2ea6bc2297",
      "tokens": 68872.75989588983
  },
  {
      "address": "0x9ff6d6c40db043438b0c3fe3fe6e644c89bf9ad2",
      "tokens": 68799.45228943405
  },
  {
      "address": "0x72ec2dbe3e936b9591f03215829f51963a8a26db",
      "tokens": 67483.38939441521
  },
  {
      "address": "0x8e62313e649996ad76ca50766802b69930b06086",
      "tokens": 67221.69781532817
  },
  {
      "address": "0x8f4337ef851678c3c8111e8fc1b0ccd9fcc20094",
      "tokens": 66729.47645065245
  },
  {
      "address": "0x295cfebc54964f3aca1f326c28c9590a310c9a39",
      "tokens": 66437.16393785342
  },
  {
      "address": "0x0f854d0f28ed4ad6b4bc04e7d902e0c11ae6d23a",
      "tokens": 66281.22504889841
  },
  {
      "address": "0xb31e313fbb93bf3c313167e8cd5c9ffc2b702735",
      "tokens": 65384.42700058266
  },
  {
      "address": "0x22a8490d883ca52e22d916f7f6e4a33374ad356d",
      "tokens": 64805.96293384051
  },
  {
      "address": "0xf504e47a87b1ccd9e4deea355caf9a26f92765f9",
      "tokens": 64566.35964686691
  },
  {
      "address": "0x7261e11ea155301701a7e83fd3e79d21618fd491",
      "tokens": 64300.66019632056
  },
  {
      "address": "0x0ab203f6fff02c0b672c461b16b757de49d17681",
      "tokens": 63207.88717797757
  },
  {
      "address": "0x63216566707a0fa6f3dbf94d81e6f33c8886a8b0",
      "tokens": 63101.45980027296
  },
  {
      "address": "0x8e2fe9250f97d8ba2d59aac671f03ff667b011e1",
      "tokens": 62725.10393295984
  },
  {
      "address": "0xe74816f64fd1b925228c04648fe60abff2bacbb5",
      "tokens": 62194.27477848022
  },
  {
      "address": "0x6b69943c43836f6a049318382accc41a079bfe5a",
      "tokens": 61808.66161072967
  },
  {
      "address": "0x751249e2845b26ac691df909f9790e8e29e36d46",
      "tokens": 61676.352454229054
  },
  {
      "address": "0xf86dc02d2f87484409920293793e4ab52f1176dc",
      "tokens": 61546.94315095903
  },
  {
      "address": "0xda478f96aa605e55149f53b41ae9258725a08d92",
      "tokens": 61269.54940324305
  },
  {
      "address": "0x734fb104629ba45a3eb7ffe6ab4fe6d471e8a37d",
      "tokens": 60875.457200250275
  },
  {
      "address": "0x768af59a879e39b6199a83f457bede27e0017447",
      "tokens": 60056.76154728517
  },
  {
      "address": "0x57405b349b5396079d3fdede866c801962479811",
      "tokens": 60007.36168817917
  },
  {
      "address": "0x9bd23a97689401c87484eda99ed29db3db815bf3",
      "tokens": 59640.25403019097
  },
  {
      "address": "0x98b27e16b6e74b950e89577ab7152526a576c6ef",
      "tokens": 59315.463555270275
  },
  {
      "address": "0x9ef73c727b8bbcd91f178056b357b887221e2819",
      "tokens": 59242.42029358999
  },
  {
      "address": "0x1d878a31c2acc7de3c5c1d37eba11a5478791f0c",
      "tokens": 56511.59694996917
  },
  {
      "address": "0xb017c481575318017dc2122b59759b25d21f6721",
      "tokens": 58054.28424227353
  },
  {
      "address": "0xf9dcbf3e0bfb717ddea127e8324849b9232237b1",
      "tokens": 57618.16789949246
  },
  {
      "address": "0x48d296c9bccf097fb4dc3828f258a5209795597d",
      "tokens": 57518.812506202514
  },
  {
      "address": "0x8103f216aba4402b348d70d9e306e4bf39791acd",
      "tokens": 57440.73448075692
  },
  {
      "address": "0x5b8a45e537c4902e5a2433accd26dde20ab4eb62",
      "tokens": 57358.41736439042
  },
  {
      "address": "0xcae5ad4fad63e525671d7ae9348be07395df1c3f",
      "tokens": 57025.51720657408
  },
  {
      "address": "0x48d8f06fbb068f89d2a7308495c6747bf932836e",
      "tokens": 56820.28951038738
  },
  {
      "address": "0x32edcb83d803d137017f49d16dca20b861ca0504",
      "tokens": 56475.65728347386
  },
  {
      "address": "0x8a2f033a4bcb89fb20848e6c3e62e2bba86ddc47",
      "tokens": 56430.17193583345
  },
  {
      "address": "0xce3d827afe808df365dffd706d7725a114021516",
      "tokens": 55745.55789810884
  },
  {
      "address": "0x57b15602650fbd20fce92cd478fb62127bce4c99",
      "tokens": 54722.914727269395
  },
  {
      "address": "0xa455e86b6cf46af34242eb2a5adc53bdc620f2c4",
      "tokens": 54649.32659052625
  },
  {
      "address": "0x666dd1cfaebb3f187936a439f5757149d41e440e",
      "tokens": 53349.09522385951
  },
  {
      "address": "0x76458304966c516f5dd2b8399172d9772afe8e15",
      "tokens": 53210.12884054509
  },
  {
      "address": "0x6a46054db4a8fce1405f88b99b6cb59ffcc8d601",
      "tokens": 52972.11698756345
  },
  {
      "address": "0x691b93b28d8f07a9fbb24b9bdc2cfae56157edaa",
      "tokens": 52748.10752492839
  },
  {
      "address": "0x75b23e8da1eccaa43bc7a4e23831bd46e559d22b",
      "tokens": 52640.453125979824
  },
  {
      "address": "0x7cbfcf398219ab8637924d9094713b59053a34d3",
      "tokens": 52580.93294156686
  },
  {
      "address": "0xf3b3ab7d5abdfd54d1c7d4713cb12586712dec2d",
      "tokens": 52230.30551551868
  },
  {
      "address": "0xc53b7b7cf07034cdbae787175e9dc62c2061f5c6",
      "tokens": 52191.57042283385
  },
  {
      "address": "0x3acd989cb41ca7d4845820e00bae0f56edf9629c",
      "tokens": 51919.58776996846
  },
  {
      "address": "0x9d08adfbdfcaea74510b7dfd56ec66a54cafbe6a",
      "tokens": 51755.10362725199
  },
  {
      "address": "0xa5f33a3ffd923a71a4ff280f2e7a036d7d357201",
      "tokens": 51530.414101327166
  },
  {
      "address": "0xa3c2fb6af923df76d1fa6b480e4bf9c1a32f0b33",
      "tokens": 51492.41752974869
  },
  {
      "address": "0x75f94e6518593852267bdf60e4f6aecc5eefc16a",
      "tokens": 51415.19401689957
  },
  {
      "address": "0xe1da75603121f80c1ada305720ffb74cd931b7ad",
      "tokens": 51205.18266929669
  },
  {
      "address": "0x844b722644149dbdc814fcad1f95c91d0fa31879",
      "tokens": 51070.27143033748
  },
  {
      "address": "0x44755c01b481503e07f5fbd9e1c99a15b97ed09e",
      "tokens": 50841.09845665365
  },
  {
      "address": "0x7a1bd7172c38848bd5b7c39969142d054ee1e785",
      "tokens": 50557.74600995586
  },
  {
      "address": "0xeaa7997cc9e0c267ec9c98166f86a272bab9ee0b",
      "tokens": 50544.47319088601
  },
  {
      "address": "0x52f5417943ad6b9940b62ba0ec7c0fc7ea4b1214",
      "tokens": 50335.82010807922
  },
  {
      "address": "0x8f219335ecc6004893e0f7dc0044efc8e389d9c1",
      "tokens": 50168.15490983535
  },
  {
      "address": "0x9366a61c0c5a72d747fe7a5d979562f4547e8376",
      "tokens": 50106.55798280907
  },
  {
      "address": "0x9e22d7641a7cfe6530df43ae5cbec3460120ab76",
      "tokens": 49999.716387849614
  },
  {
      "address": "0x86dd06d12369cd37389fd2b9edc66db671d27d99",
      "tokens": 49596.60174670464
  },
  {
      "address": "0xa0821fbd049d5e5a071e0659f781d495f64a9665",
      "tokens": 49458.99432756401
  },
  {
      "address": "0x7b5e3257d2e21bdb1a341e0494abcc4a3d91b814",
      "tokens": 46278.567030184975
  },
  {
      "address": "0x2357fa591a86f7a836f069144a9394e8840cb8c1",
      "tokens": 46034.83274362676
  },
  {
      "address": "0x2c4b087c4c140ac8fa2514499be9664acf2b1af9",
      "tokens": 45558.68921120289
  },
  {
      "address": "0x74a582626e977bca6ea61d8c86e0cd57bb1eae5b",
      "tokens": 45410.696030787636
  },
  {
      "address": "0x481f647a617729a0aeed6e823f0e344ae1ff5469",
      "tokens": 44681.16549690841
  },
  {
      "address": "0xa39a4c4360640d6eef8ef97d9bc912dd35d7da9c",
      "tokens": 44208.55700235924
  },
  {
      "address": "0xc28cf7d1bba82ecadb9367f1ab480ea7b693cf80",
      "tokens": 43899.50399915351
  },
  {
      "address": "0xff4c17c85e441917bccdc4c82e9a10babe02dfe7",
      "tokens": 43595.00963205981
  },
  {
      "address": "0x0ab0bcd71d685db0e5642488f429053a9d96d76e",
      "tokens": 43418.69548431912
  },
  {
      "address": "0xcb5f39e69d2da855c19e60aea79b521aca96b2d0",
      "tokens": 42844.35063602587
  },
  {
      "address": "0xb48ed94c1a02184d288b861415605bb41765e602",
      "tokens": 37519.43847686862
  },
  {
      "address": "0x4eaa9c9f922834c618679adb3226bddd163135f2",
      "tokens": 42498.67807529968
  },
  {
      "address": "0x817fc3f106852369e35776cccb5c008c8d391fd6",
      "tokens": 39291.5412908407
  },
  {
      "address": "0xce7a1e798611cfa7166d52be44409541b84408ca",
      "tokens": 42424.40094101449
  },
  {
      "address": "0x03dd40f21dd5601a524b2bd0c983c427be4ca5a0",
      "tokens": 41632.86488460145
  },
  {
      "address": "0xff73550612531bdd7c98067a43857d432caeb735",
      "tokens": 41397.154394040466
  },
  {
      "address": "0x994f8c25cd7c989c6ffb90d716fccff8fdd143f6",
      "tokens": 41169.24090967198
  },
  {
      "address": "0xb479aab634d820669526d67511d1f18d5468cfca",
      "tokens": 40485.7901115987
  },
  {
      "address": "0x0f39723e33d07b87d1aeb206bfcd076534eab94c",
      "tokens": 40469.72661835946
  },
  {
      "address": "0x6efa7b45769842f83c926f4403d8a8417596e90b",
      "tokens": 40081.864692714546
  },
  {
      "address": "0x0b4d85877d420e02b1da18809c13f6c7e04a837d",
      "tokens": 39747.203984213054
  },
  {
      "address": "0x21acd9415de12c6a8c06eb679cd58da50c71ec57",
      "tokens": 39726.113746797455
  },
  {
      "address": "0x9cfd1e2a7fe21d11dcf526c3fee26e84cfb59bfe",
      "tokens": 37560.156100108376
  },
  {
      "address": "0x325fd3c45027a238b65b5f48866a9b2a37ba27be",
      "tokens": 39043.296328433076
  },
  {
      "address": "0x9013100ad55cef4e7882d05ac039570b6120f949",
      "tokens": 38937.05293155777
  },
  {
      "address": "0x29a71987d623f471e0933faea0a1f477314b3ada",
      "tokens": 38433.01793597936
  },
  {
      "address": "0xcaf6e79385c38af0789f7cd724c7f571dc4fbca8",
      "tokens": 37990.88886600672
  },
  {
      "address": "0x0bd56917195042bd188f84f542c3197b66fad681",
      "tokens": 37967.17440425257
  },
  {
      "address": "0xfd6d157d1d5d97fbcbfc92367fbea741e7e4aa9c",
      "tokens": 37748.24304492489
  },
  {
      "address": "0x7fd7f2c37f2ce1d76786054c1f031808ca7cc144",
      "tokens": 37607.93733906542
  },
  {
      "address": "0x512eaac9d76a03ddcb930aa8d498dd3551372efc",
      "tokens": 37547.86947335676
  },
  {
      "address": "0x7fe92a2311258ef266640d23b2a95186b2c28efb",
      "tokens": 37281.756142163315
  },
  {
      "address": "0x55b60105041bf3224f338de6883cf12614497723",
      "tokens": 36952.928323076914
  },
  {
      "address": "0x91efa79b71aff22d3ec0e719f159d5169ef06eb0",
      "tokens": 36317.60339660826
  },
  {
      "address": "0x5892a935bdb3263fd8dbfad2fbeb1ef3cfa9d036",
      "tokens": 36520.40606024034
  },
  {
      "address": "0x34dfc4481ce4401441bbc002d3fd97e0c344f8ea",
      "tokens": 36497.26596279046
  },
  {
      "address": "0x80c481d28a2a21105a1475b4639f58f5a4ad320d",
      "tokens": 36352.225681833625
  },
  {
      "address": "0xa0f2d9f342d43306d16f1b6c35ff886ba50f809a",
      "tokens": 30329.028350873734
  },
  {
      "address": "0xf4c4073962d54d9970e979dce62e2de860705dac",
      "tokens": 35667.20270881981
  },
  {
      "address": "0x63ba3f411a8a92ec1de4e83c6db4f4eaee8b049b",
      "tokens": 35647.71566650333
  },
  {
      "address": "0x48fe9a1bfb34882e54c19505d5b2fe8610ffe517",
      "tokens": 35427.38171158252
  },
  {
      "address": "0x861035347aa5a1eb6cad3135c3021290ac64f541",
      "tokens": 35244.725242451575
  },
  {
      "address": "0x81dba277fd93c5b2419d8f8500f1d099ca5608ee",
      "tokens": 35131.103399032705
  },
  {
      "address": "0x7f0736d78bd9683d586e7af57e4f1d4672678f66",
      "tokens": 34771.885109085226
  },
  {
      "address": "0x3a7c3e758eef0c1515e2e6861f7e5ff73b8b4ba7",
      "tokens": 34381.44702515308
  },
  {
      "address": "0x7ba241813aebdf8c57ee081348e120257ef1f5b8",
      "tokens": 34264.34267415945
  },
  {
      "address": "0x36f5b4659574fda8753a9fe9eea4424ec5177c1d",
      "tokens": 32387.176935563308
  },
  {
      "address": "0xe9cd7218926f103701fd092547a1c47fc392b823",
      "tokens": 31943.98034135119
  },
  {
      "address": "0x3787e9a6d2ab1822660368fdd301c3f16e595962",
      "tokens": 31875.132038120144
  },
  {
      "address": "0x7773f0ae770fdc7e58453ef3d1819f1f59f8c98a",
      "tokens": 27059.054491080115
  },
  {
      "address": "0xb751c3d2ca2fe23c1d87cb5ca65559111afbbfd1",
      "tokens": 31272.963500813854
  },
  {
      "address": "0x2a9a8f50c3aa879b3fc490ba6327863eead62503",
      "tokens": 30812.180472233376
  },
  {
      "address": "0x8030d249765a75a9b07bcb7afe9f3adaeda97b8f",
      "tokens": 30660.394055566794
  },
  {
      "address": "0x103975d59750f58d8f055c774a4a4465ab0390e6",
      "tokens": 30644.18255987069
  },
  {
      "address": "0xe6ef59af57e89e13b7791980034510107df7e442",
      "tokens": 30578.04636563855
  },
  {
      "address": "0x1a7d88a28b90a42e63509a6e37c69bb2153a88d7",
      "tokens": 30154.043347387673
  },
  {
      "address": "0xdb6de290e75928b092dcd0dfcfce17af20ce2f15",
      "tokens": 29922.910739497413
  },
  {
      "address": "0x97bb27bfc1cc8e7e64764f05de3db2e09af2192f",
      "tokens": 29865.58582896563
  },
  {
      "address": "0x4badc5e9bcd0e1452795ce3b513e893a7e59b7c8",
      "tokens": 29594.620697987237
  },
  {
      "address": "0xc106b4b8f98e08fd9f5f87f518a6dff48b4d2e2b",
      "tokens": 29166.37542486589
  },
  {
      "address": "0xbb49cac915ea1c19a0fcf9b151b0d8ab610340ee",
      "tokens": 29075.198523929124
  },
  {
      "address": "0xe55432f7b77d556c472b175c759a2ee714a1652a",
      "tokens": 29050.23591470922
  },
  {
      "address": "0x482202e1765ef1066e8c392bb035aa6a1a21f9da",
      "tokens": 29002.744717468035
  },
  {
      "address": "0xdb173536960c84cf2361f83d57c7382e7fd4f02d",
      "tokens": 28974.318025762455
  },
  {
      "address": "0xa3121e49bd253ecd698f9a2ddc71162a4c9615ac",
      "tokens": 28944.532947413714
  },
  {
      "address": "0x7a1ea363611303c70d9423c85d74cf8f10d4f722",
      "tokens": 28795.504629205836
  },
  {
      "address": "0xa76e565e2910174f88d21e5430b83877a94ba76a",
      "tokens": 28717.811776039012
  },
  {
      "address": "0x9e1d61adbb5cb40ba93a320a18d2bd99606cf64e",
      "tokens": 28647.14812517159
  },
  {
      "address": "0x9a9a5e62d1fdc59361662b1350b4c39dfb977841",
      "tokens": 28606.115680033086
  },
  {
      "address": "0x9e70baf2e33ca2c7d200bba062ff5becb75b90a1",
      "tokens": 27324.92590909797
  },
  {
      "address": "0x2b3dc31e59cdb55a388b99a28269b08f66090029",
      "tokens": 28329.70149747937
  },
  {
      "address": "0x9a2e8037d4700ff3066d9feeb682b99dc5de5bb3",
      "tokens": 27870.765480906342
  },
  {
      "address": "0x1ecf5141741ae40336fa73cfd85cf8bb08c08f56",
      "tokens": 27511.426283417048
  },
  {
      "address": "0x00702e26f1e0a3bd990ef4a39286d9ef6b5de47f",
      "tokens": 27321.03079167254
  },
  {
      "address": "0x6cd173869f10cae4824b3a199ceafd3881f72744",
      "tokens": 26616.88243354602
  },
  {
      "address": "0x1f585a0861376754fed91c4c59d77394c6c55dfe",
      "tokens": 26604.6521703663
  },
  {
      "address": "0xea3409a8421343c64f917ba84bce5c32ae2094a6",
      "tokens": 26525.825164296442
  },
  {
      "address": "0x70199e9b6428fa0a9fc6f65d5b2dd90bb78102a8",
      "tokens": 26421.756742081572
  },
  {
      "address": "0x5de80e06fea5b35fa112ead66d1e4820f00f4688",
      "tokens": 26372.116053963167
  },
  {
      "address": "0xa812f3709e0f83e1e3e198edbc39ec187621d5c7",
      "tokens": 25939.57750297763
  },
  {
      "address": "0xb8bb75d061ab6273a3eb4dbde701f4dc4f3e9f55",
      "tokens": 25650.228280968786
  },
  {
      "address": "0x7bb65e3ca705338a90efe988448bec0066014248",
      "tokens": 25407.633891045152
  },
  {
      "address": "0xcc4a191e51d7880df09d53d2709092d0f71aab48",
      "tokens": 25190.234883031244
  },
  {
      "address": "0x6990fce46b3fd2caa22852e0758f59bd8b62919a",
      "tokens": 24920.952816245925
  },
  {
      "address": "0xc9b887fc76b1c83d4d507ca3d9d25d704e0838f9",
      "tokens": 24838.067107827963
  },
  {
      "address": "0x8f1bbff4c77a35777826259a3878c1db5c932da6",
      "tokens": 24123.967986881737
  },
  {
      "address": "0x8595ad1b8f391e9f13e082f981565b6aa3ff6754",
      "tokens": 24112.383714775715
  },
  {
      "address": "0x0a6d06eec19c39f3d5178d7fc06796ba5e22723f",
      "tokens": 23691.21753089696
  },
  {
      "address": "0x6823a1191db5e321b7092ed2b64dbad395fb381f",
      "tokens": 23661.14568047493
  },
  {
      "address": "0xc64d36e1f8abab0d43248a69b75146ddfd8d5a72",
      "tokens": 23329.539729258086
  },
  {
      "address": "0xff152ecf604b879266eee9bbd843a71d6a7f78bb",
      "tokens": 23213.43602375671
  },
  {
      "address": "0xad0185b1bdc3588d11d2a560566b3317288de304",
      "tokens": 23208.51796609142
  },
  {
      "address": "0x3ca5caa7efe54a7e2db16264e782ec556e2bb786",
      "tokens": 23105.703144746465
  },
  {
      "address": "0x7c60fbf912f2fb0ae14d4e190067d758502f7ae1",
      "tokens": 22895.155203898667
  },
  {
      "address": "0x528ff694744b40ea8de582c08cc3e2183c1ad9eb",
      "tokens": 22736.348394656092
  },
  {
      "address": "0x2455c406b665347ce7da902534966267279caf9e",
      "tokens": 22443.68608545672
  },
  {
      "address": "0xa125682325ea44b5851ebbfb320aed94afc71e14",
      "tokens": 22383.293497327206
  },
  {
      "address": "0xe5081f3b75d46fcd3e492213b2a7b59d21191c31",
      "tokens": 22193.1456971428
  },
  {
      "address": "0x08b6172022ff7bef9c851961c6dc1373a777c527",
      "tokens": 22020.343560702484
  },
  {
      "address": "0x641bc2293f09252152494c447d975d1bad43c527",
      "tokens": 21951.08471322464
  },
  {
      "address": "0x63a43a24de2ce6b1bfed393f6fad714b172a977e",
      "tokens": 21910.517614430988
  },
  {
      "address": "0x371bc572a15eda7e2ba171acf5ae60541c205124",
      "tokens": 21773.952558789315
  },
  {
      "address": "0x6492b7038ff209712ed51294d0d1c2208b340e5a",
      "tokens": 21341.53651498511
  },
  {
      "address": "0x7ccbbd5f969006209ba382d44bb8e2920f2096a5",
      "tokens": 21240.15487023901
  },
  {
      "address": "0xac605c2f6e121a929cd9cd15d812d080b9776e5d",
      "tokens": 21205.217490279192
  },
  {
      "address": "0xecca36d87b5e5b404bc01c6224ac12433fbf9534",
      "tokens": 20710.622646721076
  },
  {
      "address": "0xb3859ed39efb5f5c16a8d95f234f6c351004d1ed",
      "tokens": 20393.168548347552
  },
  {
      "address": "0x4dd81b27d5638b57cc07997ef5bf0b5c9e966bb9",
      "tokens": 20339.639019019924
  },
  {
      "address": "0x67e0c703fe53889e4d062d1a44c24c33360aafd6",
      "tokens": 20247.801423201858
  },
  {
      "address": "0x7445d0a9bc0b177a9cf1f314cc2d290f5cad46e0",
      "tokens": 20201.103197338063
  },
  {
      "address": "0x1a7913b1ef897cb747e4142374898d4cff8aa813",
      "tokens": 20032.202047366885
  },
  {
      "address": "0x03f828ee53bd8fc8835dd8eff98866055267935b",
      "tokens": 19861.691050231268
  },
  {
      "address": "0xde87356d88172e032752bead7f5eeacd6bd62599",
      "tokens": 18471.033986949606
  },
  {
      "address": "0x6d9a6e313a577517df26898f7c93d84a63667f65",
      "tokens": 19742.05961949374
  },
  {
      "address": "0x1dbe6a41bd71f494e3e276cdf5a61650582a697f",
      "tokens": 19254.003714549686
  },
  {
      "address": "0x5548ab1d65481147d9d933387eb7df2776abd203",
      "tokens": 19218.79967077269
  },
  {
      "address": "0xf0eecdcd8af383fa7c29c73d47618dcfb3185232",
      "tokens": 19168.941404048215
  },
  {
      "address": "0xc17cc9e470ba21aa4acb6474e700d6245f68c5e6",
      "tokens": 19113.529146033048
  },
  {
      "address": "0xe79b82b28b9ce873b7b4d01e0a0025a4e1c14501",
      "tokens": 19096.484689358174
  },
  {
      "address": "0x004e7d7dc5449124622420c990c227944e6ab17d",
      "tokens": 18977.217656185876
  },
  {
      "address": "0xe11e408c3485f99ab347bc8756859c536ec719a8",
      "tokens": 18967.13937357332
  },
  {
      "address": "0x2b634536bb9a535f70f353d206dfa6576be1ff94",
      "tokens": 18780.558147837604
  },
  {
      "address": "0x3ee852c5f1702ab2cb6c46d6bfd9c5bfbe753c86",
      "tokens": 18675.970452118578
  },
  {
      "address": "0xda57c7757c515c111a735b75001a5afef21e9ce0",
      "tokens": 18640.014225281964
  },
  {
      "address": "0xe1925cb4ed65362a8b938fd797a4409c614b3891",
      "tokens": 18579.459096851668
  },
  {
      "address": "0x65b55ca310e7b64c5655099891f6c859758cbfc3",
      "tokens": 18476.466425412596
  },
  {
      "address": "0x80c8b076ab5421c9be4079918a3d065fbe03ab0c",
      "tokens": 18049.186474403654
  },
  {
      "address": "0x2fb62647e14feff3b599f638d0cccaa35ed02416",
      "tokens": 18035.832382008877
  },
  {
      "address": "0x75645637c7f6af95acfb57b50a74197c23735f1c",
      "tokens": 18023.828855916134
  },
  {
      "address": "0xfb72313a83b1ea1ef199bd44fc1bb62049b8c859",
      "tokens": 17987.271448808715
  },
  {
      "address": "0x943c3767c49f23b0be0f21ef6488bbdee3532c02",
      "tokens": 17638.065471798207
  },
  {
      "address": "0x5438dcc75cceeeb7a05f9366ffd69bab91fb63a6",
      "tokens": 17328.552586242484
  },
  {
      "address": "0xa83a5a7e3088097592c1474ec15d3eb1edabd22c",
      "tokens": 17126.483211130297
  },
  {
      "address": "0x787da3f289247ac72f75b642abf1015c020a12d5",
      "tokens": 16814.80179602582
  },
  {
      "address": "0xe20fcdd7b52e7ca1532c00065048094eec020557",
      "tokens": 16763.603523357473
  },
  {
      "address": "0xa35cd2a9570f793a0fb579f2de89744036c2e7a0",
      "tokens": 16668.609029102383
  },
  {
      "address": "0x72256a865ab56c98cfbed1de42ee72d1895b0913",
      "tokens": 16533.02261257795
  },
  {
      "address": "0xc96e9567d010add79231c65f16de7dd9d83faec0",
      "tokens": 16395.91662066617
  },
  {
      "address": "0xe865e22ed0375c81ced3b7f29aa353bb82a0afcd",
      "tokens": 16387.038946483844
  },
  {
      "address": "0x3164ef651491ffdec5552c31ee4065fdb0fbb5b2",
      "tokens": 16259.12692304604
  },
  {
      "address": "0x0b21c5ba99ca4531b3b1d1df977cd39520fc28cf",
      "tokens": 16252.782860946014
  },
  {
      "address": "0x18786690f97a7502b935efaea386cab04d98f5da",
      "tokens": 15987.13093878592
  },
  {
      "address": "0x1ac6a7d3c0eee3c73d7f3165a6e01a23cfb98ed1",
      "tokens": 15987.846565110955
  },
  {
      "address": "0x818827b1afb3b24d59e535225e8133c7f3ff34a1",
      "tokens": 15957.698203879281
  },
  {
      "address": "0xa5f4df02e4a8cb1f9892eec841a632e19c856a58",
      "tokens": 15951.151010979635
  },
  {
      "address": "0x2dfdc2fe97e55069cb75580842b66dbe2baefd3e",
      "tokens": 15940.320641329889
  },
  {
      "address": "0xef154c3fa8bf701bb987737215a28514f9cb5d7d",
      "tokens": 15831.738907709323
  },
  {
      "address": "0x824ce1ff230c27d96eb86814d427a590658c2834",
      "tokens": 15569.844906762877
  },
  {
      "address": "0xff081886408f6972de9b23c7280561fbf5768336",
      "tokens": 15237.283406030645
  },
  {
      "address": "0xf594d1df894ce88cd82723d2a7a10dffce19e543",
      "tokens": 15212.099120293162
  },
  {
      "address": "0x901373c61012a91be0f6ef11972c871fa80d798d",
      "tokens": 15101.0521632037
  },
  {
      "address": "0xafb17791793e0f7d408776c39f4d0693141e1ccb",
      "tokens": 14921.855492412158
  },
  {
      "address": "0xd5430231edd3f8e1279de5d2db8bc49f2bb92d4f",
      "tokens": 14616.555192745198
  },
  {
      "address": "0x0c3fd77b11e1d520a99318a232f17bb2f65aafe8",
      "tokens": 14534.841506032273
  },
  {
      "address": "0x20234773c85abd1096eec44a3695ffc8343f9221",
      "tokens": 14405.220731801604
  },
  {
      "address": "0x868024c86a36ffa5dd997dd73472ab1494f42362",
      "tokens": 14275.593128080383
  },
  {
      "address": "0xd0b29081c96ae79c13c2b30d66fffe47f35d82da",
      "tokens": 14192.88520370322
  },
  {
      "address": "0xbb6ffe0ee8799cd84c4047bfa8ebfd20fb7056eb",
      "tokens": 14099.14264720329
  },
  {
      "address": "0xe41b8c549be04595671b8bf9a796a7932f1639f7",
      "tokens": 14086.648799201806
  },
  {
      "address": "0xcc6cfe25e6b3eff43d376ed166176a748a29abfa",
      "tokens": 8905.931140292616
  },
  {
      "address": "0xb072509629e38d25b44734f493f6597331311ac1",
      "tokens": 13987.930197331949
  },
  {
      "address": "0xf6267dcf1b9905be464b8a69f6ecb4a3544ee33d",
      "tokens": 13792.941891897217
  },
  {
      "address": "0xc0f66e373f6739f12586ae060228be684f902cd2",
      "tokens": 13763.683060248311
  },
  {
      "address": "0xa9c573c1fa2ceab0a6d57a1ea02e86a691c20443",
      "tokens": 13698.08791501847
  },
  {
      "address": "0x7d032d8252b87efe053d9a9f47453b503e6771c9",
      "tokens": 13604.98263036001
  },
  {
      "address": "0x74bd61b9c3242b32e3f9f19195e23b106c6baf8a",
      "tokens": 13587.723334898146
  },
  {
      "address": "0x11048f615d3c067ee31039f3c40c1aede34d600e",
      "tokens": 13406.265300770727
  },
  {
      "address": "0xb01d713ebb927924a3fc830cc2d5bd24d866e056",
      "tokens": 13301.941674567975
  },
  {
      "address": "0x80ccd8664598d681834b29be2e92e37aede6af1f",
      "tokens": 13292.910353656984
  },
  {
      "address": "0xf74cc6d74194718b54a8d349a11001eea14c669c",
      "tokens": 13250.937443262643
  },
  {
      "address": "0xaa44abcd4770806bec17da7ec275be70f902b7a5",
      "tokens": 13242.836421972948
  },
  {
      "address": "0x956f4d2b3c678d7ecb6700a6b9c8c15b21c7ee63",
      "tokens": 13106.467132174195
  },
  {
      "address": "0xbc041877218efcc989095999f3e3a0fb20b174af",
      "tokens": 12999.188108928249
  },
  {
      "address": "0x6ac91a5c2d701756273ded53043669e5a5e0fec4",
      "tokens": 12990.20435683257
  },
  {
      "address": "0x867958ff4f461a6f86ed80af6e46c6fdb4a9bff4",
      "tokens": 12947.84088437017
  },
  {
      "address": "0x7ab7f6eb4eee79c9fa49c4738a18ccc693db7cab",
      "tokens": 12944.692745641501
  },
  {
      "address": "0x6d13cf9d1eb21c860c14f305d9613bb52e52df26",
      "tokens": 12859.38221307605
  },
  {
      "address": "0xb750460ecf1c431632a122bf088a4e4dc1bee502",
      "tokens": 12796.710182825036
  },
  {
      "address": "0x13b77b4e09055d67bd636dff2d61e85c40cef746",
      "tokens": 12301.494227199297
  },
  {
      "address": "0xb85fcca7a189e0aece9994dbebfcd5be386e16b1",
      "tokens": 12366.6935621651
  },
  {
      "address": "0x92bf61fe50980015ceeb613c20974c405b15af92",
      "tokens": 12360.81645693698
  },
  {
      "address": "0x486abf8bc5db283c8d4682b35658f82c7f3b1b7b",
      "tokens": 12334.891520488618
  },
  {
      "address": "0xa730d0a330e89990ee1a8cec4cd5f435dfd90b99",
      "tokens": 12187.67354471079
  },
  {
      "address": "0x7c1e70e2c3a7cbb3d26304d653932f3d0e782c3e",
      "tokens": 12163.567224848506
  },
  {
      "address": "0xe385515c7fef550f7b24f96fb52a5ceca4b6b524",
      "tokens": 12026.707772874184
  },
  {
      "address": "0x6d4cf43b477480e338017eb9eaa715c5b6fd49ba",
      "tokens": 11920.16023567689
  },
  {
      "address": "0x519015aee630db8f6232c4bba3936290f8113365",
      "tokens": 11660.059864738652
  },
  {
      "address": "0x1e1d69ba0c1dbdc76308084d6dea8c6edd912540",
      "tokens": 11624.818491206051
  },
  {
      "address": "0x2c1ddd24fbb4b63723dd2c2caa87d75e84daa943",
      "tokens": 11540.055099975229
  },
  {
      "address": "0xc294bbb3b91c38b09f68e6d48efaa1193221dc0e",
      "tokens": 11519.648128192739
  },
  {
      "address": "0x10b34333d36fd38fd3c821d090285a3c69a9fa8c",
      "tokens": 11261.686930436488
  },
  {
      "address": "0xb0b7147b8f2ec81afeb829d48718041201642740",
      "tokens": 11055.415094356063
  },
  {
      "address": "0x723509981bc379be2fe70fd2c1358e2f0961383b",
      "tokens": 11479.683364875995
  },
  {
      "address": "0xa93ce410f7c51f612a60bc70c827d2aee46ce048",
      "tokens": 11465.52697065822
  },
  {
      "address": "0xf8f627541fdfba642a67efab2cfe30d740c3cd6f",
      "tokens": 11174.783025045548
  },
  {
      "address": "0x847c1b4f34e93d2ae81b9d099c3e52f53d9abea2",
      "tokens": 11429.630579225724
  },
  {
      "address": "0x11a3c58f9aeec448f9e3ac45796243c63757d402",
      "tokens": 11427.125170862651
  },
  {
      "address": "0x41d58c789e7ec0457777ec0a4feadaeea948cb51",
      "tokens": 11384.652903987573
  },
  {
      "address": "0x4a4b3e202147fb6e76b4649a146b7793c21afa4e",
      "tokens": 11376.807969358395
  },
  {
      "address": "0x8b6ae1bf910c695eaf788a2ffa2c0f39ee9174d3",
      "tokens": 11366.420344057482
  },
  {
      "address": "0xba518fe981bd22d82c5ca6ec18f23706d911a85d",
      "tokens": 11257.93773732496
  },
  {
      "address": "0x04ca2c4161cfdda1c11f90c8b3b31af366009983",
      "tokens": 11246.368125973602
  },
  {
      "address": "0x013bbcff38f4e875b0218e4eb460e0e7c8ffafc2",
      "tokens": 11128.949475415644
  },
  {
      "address": "0xef358811b702b986bfe4cca1379c4ce5931b5ddb",
      "tokens": 11080.944857071205
  },
  {
      "address": "0xf779f836a3d013d8012207db88fc16820f4bd7a0",
      "tokens": 11079.013558206923
  },
  {
      "address": "0x767020a31aab859ef46af5bb6f79a23e4378df06",
      "tokens": 11037.067250059214
  },
  {
      "address": "0x51e035d13ef05fcd1d222ff8a340e7bda8b7a24b",
      "tokens": 11027.165320474456
  },
  {
      "address": "0x87073e6277ef2c9c34b2c112a478a49c1103c895",
      "tokens": 10979.588658446524
  },
  {
      "address": "0xe383357d63f092d3ef7455f0d49a0c4362666550",
      "tokens": 10979.532263928257
  },
  {
      "address": "0xa9194f5f22bd8fd053099782b24dc74b11866748",
      "tokens": 10796.513372687728
  },
  {
      "address": "0xd52396ec258857f2dc96825dccdf4a098865cc65",
      "tokens": 10652.405139781962
  },
  {
      "address": "0x27751952505aaaaabbdb12690961b081f4c7c4f3",
      "tokens": 10609.064170270247
  },
  {
      "address": "0x2f9c8e08fb09e196654d5e82a5cc20d57827af4a",
      "tokens": 10563.827221701187
  },
  {
      "address": "0x1cd75fce10a889abb094b1ad412daa000fdb1a63",
      "tokens": 10506.43188580999
  },
  {
      "address": "0x13e8cf77feb8195b00c2b1f97a564ff2ef3b1fa5",
      "tokens": 10498.025714928892
  },
  {
      "address": "0x3f1e51650f40bf7905b0ee990002b648e778edab",
      "tokens": 10440.477992250842
  },
  {
      "address": "0xc08a3b1e45975561b2ef5a912f792d929a3793bc",
      "tokens": 10425.586029401404
  },
  {
      "address": "0x5d50c131d5481068d71919540b1bf2666bcebe13",
      "tokens": 10216.887698906585
  },
  {
      "address": "0x9cae326eabd474f731c975e43f89ddadc4e94e55",
      "tokens": 10167.588467643096
  },
  {
      "address": "0x67758db98b92eb53639b662fb9aee91a37841780",
      "tokens": 10105.624383805873
  },
  {
      "address": "0x80ea4bd38b7a9a5b617c0b6272b423b8cf13ccfa",
      "tokens": 10085.061419194903
  },
  {
      "address": "0xce8be7cd7e547e0bc85528300af6fe65fb83a56d",
      "tokens": 10038.923635893714
  },
  {
      "address": "0x8d8618d13e25e4f30c3d4d53c553393c067e247d",
      "tokens": 10030.99248424717
  },
  {
      "address": "0xc6d316e2bffc112e868f02ee8dd8dce7a578145b",
      "tokens": 10005.470496980895
  },
  {
      "address": "0xae88ac9800594b43ac25a57374a5dac3d183bbc1",
      "tokens": 9809.967324402374
  },
  {
      "address": "0x4aa781b19597af4f9b1f623c6c02e4124e007592",
      "tokens": 9766.881336839444
  },
  {
      "address": "0xa70a6fc85bf081839a8e910ae0c83487c4015177",
      "tokens": 9742.454465234005
  },
  {
      "address": "0xf02743fb77944f1edd04e4800bac711b6c8ad2ab",
      "tokens": 9606.679779721435
  },
  {
      "address": "0x27f75b1c8530b6c949af8ccab93f9a26a3a11f9c",
      "tokens": 9536.835916476353
  },
  {
      "address": "0x2005e7d61bd0873ff3afc1e5c4ed19f482fd4704",
      "tokens": 9356.129176678818
  },
  {
      "address": "0x088af05bbf99cf76a5bdebef7d694ccb828bcf15",
      "tokens": 9330.61372859119
  },
  {
      "address": "0x36f78e70ff7f2320919bcbeaba78eba41cb87433",
      "tokens": 9323.60838466375
  },
  {
      "address": "0xebf118fa3457c6599fcb536d775ead1da1b30dd8",
      "tokens": 9316.692680552562
  },
  {
      "address": "0x2e571058e69f9faf665b95868cc09ada4ea4fb10",
      "tokens": 9290.237862645785
  },
  {
      "address": "0x4ecee8047ce33f8f68daea20393b8fd6a7f8703d",
      "tokens": 9274.753142767344
  },
  {
      "address": "0xed4af91fea9ae2804c54464205bf78c33dd36cd1",
      "tokens": 9260.878294221078
  },
  {
      "address": "0xae17ed12adbd1aec0318c2b0a9d1c525e707e45d",
      "tokens": 9188.437575393975
  },
  {
      "address": "0xcd5d4f6655312fc58935311d67efbca4d1a8c6d4",
      "tokens": 9139.861091836121
  },
  {
      "address": "0x256dd162bb963de367f30d888f696ec591ad37cf",
      "tokens": 9112.288943160564
  },
  {
      "address": "0x0633c746f4425109dcc8226cc89a57ca62dd6a5d",
      "tokens": 9101.21003464353
  },
  {
      "address": "0x6398bb7167c5911bbdc3ec49752943a1bbe599b9",
      "tokens": 9075.698258218321
  },
  {
      "address": "0xcfd9d878e99a2d01202d221274937b228d2d5bcf",
      "tokens": 9067.16746314245
  },
  {
      "address": "0x1c964114bf39def38872cc2349b2d6be758333d0",
      "tokens": 9038.564773831686
  },
  {
      "address": "0x6cb90e5313e8da2f6d17e0f8b7b4b4a00b775d48",
      "tokens": 9026.615341852172
  },
  {
      "address": "0x36d0112d3e436258586d2b90c5e3c9884cb6fd43",
      "tokens": 9005.075411405582
  },
  {
      "address": "0x8112f864254df7249cf3ccc912ba045b6561a600",
      "tokens": 8958.17271623072
  },
  {
      "address": "0x6715419efc25e3e4f7c3ce2559f10fba910e8ac1",
      "tokens": 8938.562161992362
  },
  {
      "address": "0x8b1136cec4b05ec91dcd9694f6b2c18016d9ba3b",
      "tokens": 8910.773526090368
  },
  {
      "address": "0x9eba7269f2bd921f95072c54705ea6ca75497cbc",
      "tokens": 8897.617872250308
  },
  {
      "address": "0x114220ba6250dfc48bcb6b37f5d7f23381314379",
      "tokens": 8847.150764351045
  },
  {
      "address": "0xeb0a1abcce22433c7eb325e2307babcf78a48e7a",
      "tokens": 8846.146516568066
  },
  {
      "address": "0x0fc11e5171802dd85c2118a9114a63c1436b0abd",
      "tokens": 8786.638547693752
  },
  {
      "address": "0x0e0165c679f3c7f76185781835031212ffe03a63",
      "tokens": 8517.981569969552
  },
  {
      "address": "0xf3b040e1b1b27943fbfd1e26736c1fda8cec1512",
      "tokens": 8470.592196393207
  },
  {
      "address": "0xfd8685d3dfde586ecff18b8872fe46ed3dd9afd0",
      "tokens": 8195.998489787198
  },
  {
      "address": "0x4eee90888771bed8ed76dbf2550f96e11cf14c08",
      "tokens": 8193.809793237117
  },
  {
      "address": "0xe753d80afb2a186e95806be48c19c58e833b8199",
      "tokens": 8185.828021752532
  },
  {
      "address": "0x4cd5dc9a87aceb8fc1cdf0b72c27dc00cbe8e422",
      "tokens": 8111.912723325766
  },
  {
      "address": "0xe775dca1ffd02f6270e9f1bf09b723d3ffe6853e",
      "tokens": 7988.709829479517
  },
  {
      "address": "0x0602dcf1174926c5907d23f448b4f611acb2b55f",
      "tokens": 7953.0563842721085
  },
  {
      "address": "0x46033909d7f1c4219cfbca5aae6dcc932e88c8a3",
      "tokens": 7904.640757565898
  },
  {
      "address": "0x58283545dd3e2c6f8dd361ec4ad46c2e9d2ce17b",
      "tokens": 7893.828277018708
  },
  {
      "address": "0x82c43c713c0cc77fc50a3c1e31854f4bcf5286fc",
      "tokens": 7784.2930301358965
  },
  {
      "address": "0x7823d8db7430e712aa6524a367859b51ec8dbc93",
      "tokens": 7749.604366095369
  },
  {
      "address": "0x5eecb638564249c538c921a340efd5d42c827cde",
      "tokens": 7632.055707333836
  },
  {
      "address": "0x8c246c88a52bb11852f37cb8f3032809f243a0a6",
      "tokens": 7458.009577614408
  },
  {
      "address": "0xe1920bf8c4a5e4d24147ab2bfa0ec0df6341be95",
      "tokens": 7424.348229220677
  },
  {
      "address": "0x94ce67b597b0b51a7edc127050444f29447eee99",
      "tokens": 7381.2032199659825
  },
  {
      "address": "0x867bd8bcaf19de8da3d192cdff07c7269161fb9f",
      "tokens": 7227.353376800549
  },
  {
      "address": "0xdb3faef92ce30c0051e5361cdfd2cea50f99e0f9",
      "tokens": 7166.877658838002
  },
  {
      "address": "0xc5af70b561d49e5d385405fbf2464ead35f60016",
      "tokens": 7043.882260355642
  },
  {
      "address": "0x50240bc705e63787223094f9aa33639d7ce04f39",
      "tokens": 6980.007259591195
  },
  {
      "address": "0x3cac5198742d0cd83930657132a5a2ebbb996fdd",
      "tokens": 6891.877768511417
  },
  {
      "address": "0x092e75b0fbd1c2d742d8c497df936add5678f5d9",
      "tokens": 6817.497872290514
  },
  {
      "address": "0x78e4f317428b38db570de0dadcbb05fb08ab5b45",
      "tokens": 6730.465222693823
  },
  {
      "address": "0x016d361f7306937a1da57bac2c9f4ca0a017fc32",
      "tokens": 6699.166599713413
  },
  {
      "address": "0x2877f0ff6020bf6aed3843ae573c35118b7a6ea4",
      "tokens": 6596.6153512228875
  },
  {
      "address": "0xf35c00c472fa3d87928c6112b9194608fcec049a",
      "tokens": 6377.934197132455
  },
  {
      "address": "0x5ffd25c91ca8de078014eeddb7cebb94b34cdf73",
      "tokens": 6437.383070204334
  },
  {
      "address": "0xd66221a3280c5d049b55f521c8faf984bcbdb66c",
      "tokens": 6400.317949669674
  },
  {
      "address": "0xde9961151f88fe5060c3621e042ab7d3ada7140f",
      "tokens": 6349.816330572343
  },
  {
      "address": "0x4ad646193f7df8ed2864d1da67d7e87557172e60",
      "tokens": 6325.347466892431
  },
  {
      "address": "0x0dc2db4df3b529c8a2ef5e30c1b8193c1d34165f",
      "tokens": 6310.349678380163
  },
  {
      "address": "0xe7ff3f60336944828c18bceb5b4b4a81f96c81c4",
      "tokens": 6268.639587184275
  },
  {
      "address": "0x67e08352d0299e1b61f75d15c590ad83759319b6",
      "tokens": 6244.415916761435
  },
  {
      "address": "0x49784a9d74df42774c5314fb33720593cb2ca88a",
      "tokens": 6195.175114940916
  },
  {
      "address": "0x1800d4caf8f6b7f549a105737c7f669b327ef548",
      "tokens": 6190.095735769642
  },
  {
      "address": "0xf9eac509a4c7dc5e73884008efa25e742bf77ce0",
      "tokens": 6185.086556022481
  },
  {
      "address": "0xdc888105b6bcee4b38a938046bbc46e936832b7f",
      "tokens": 6148.511517782039
  },
  {
      "address": "0xb9351549fa584ff159e1328f4bf825d3b05e73d1",
      "tokens": 6148.438356668339
  },
  {
      "address": "0x552fdb8006470fb7562a2a42e30f00ded4d28630",
      "tokens": 6135.43694598177
  },
  {
      "address": "0xc833252f65bd529bdb8466a0097ec8dd340f72f5",
      "tokens": 6115.883377706657
  },
  {
      "address": "0x7b6cc168b5e25102718d7026e651ffe7b9916d69",
      "tokens": 6109.248711991545
  },
  {
      "address": "0x5d1e001a7a235fc7711999699f694057306fa91b",
      "tokens": 6105.455854060691
  },
  {
      "address": "0x2f9d6369f18745d6e06fe9b35522971c94f674e3",
      "tokens": 6099.253406324089
  },
  {
      "address": "0xb0d7009a74901524eb29641f2e1a25b4065383ac",
      "tokens": 6066.077514177758
  },
  {
      "address": "0x8fd506dbaf06e8f23cdc296a529d454536859be1",
      "tokens": 6065.291819868664
  },
  {
      "address": "0x1e6124a7b9e4ef85398306a8ef695ea7c729fd18",
      "tokens": 6056.86373570808
  },
  {
      "address": "0xb23f5277c8c202403933b691ae85d1fe22dc08a3",
      "tokens": 6041.096380535626
  },
  {
      "address": "0x7f27d5875cfb981c23c2552a1cfd3024c572c765",
      "tokens": 6017.917010832457
  },
  {
      "address": "0x9eecf17cacfe8c589150cd5842d0df6bd2630feb",
      "tokens": 6008.9992824975325
  },
  {
      "address": "0x409dab76d62efb94cdca74ccfac2339638fe15b2",
      "tokens": 6002.66207929774
  },
  {
      "address": "0xf255aecaa8317a732c96aae54838f9c4ea21dad3",
      "tokens": 6000.441829545034
  },
  {
      "address": "0xbd90b98bd568c2731b992f89853e1ae9b91efcf5",
      "tokens": 5965.855325131847
  },
  {
      "address": "0xd6c2047cbf1fb76a68460b8ec72ec00886ce78be",
      "tokens": 5953.969181005439
  },
  {
      "address": "0x2a86f0c59ccb3912a42e51779232537be176849e",
      "tokens": 5943.879450780715
  },
  {
      "address": "0x0c8dfd9a8f01c20119aae9915cf7a9c73bad5aca",
      "tokens": 5909.87900308222
  },
  {
      "address": "0x936adde05d68690fb46cac9a386ac149bdd0c59e",
      "tokens": 5893.884011119016
  },
  {
      "address": "0x76791069e1478469cf700f3279c5001752a23b77",
      "tokens": 5860.083263508213
  },
  {
      "address": "0x9aa19ad43657ab6a7f8ef7b45de593445241bcd0",
      "tokens": 5837.052779293817
  },
  {
      "address": "0x809bab92fc815d9615c0141c413218003911625c",
      "tokens": 5763.551331705844
  },
  {
      "address": "0x94727e43c93463131b8bc1c0bea61cff3437527b",
      "tokens": 5708.658051084572
  },
  {
      "address": "0x787b6eb7f403010dcdb1dca77efaea0129104e35",
      "tokens": 5701.008609489171
  },
  {
      "address": "0xef293ae8dbcd0b0e1888e73af5aee34182c0c82d",
      "tokens": 5599.863677691279
  },
  {
      "address": "0xab35ebd918cb441698cb3c0b1d45d6abe62b4992",
      "tokens": 5585.247005657548
  },
  {
      "address": "0xdfb6b1febdecbfdce1014216d5f80ba52109eb1a",
      "tokens": 5491.1141212709845
  },
  {
      "address": "0x1bd2e4faead353e9ae2ab2293ffc3c08c0c063cd",
      "tokens": 5475.396213766447
  },
  {
      "address": "0xae1cb95f4798545a148f71af32bbba028ddd9b9e",
      "tokens": 5426.502036529266
  },
  {
      "address": "0xca096adc8c333a2060513e3dc78bc2bfd96b6342",
      "tokens": 5421.720595042207
  },
  {
      "address": "0xcf3cb553992021ea1cec632662471d858b5fe670",
      "tokens": 5419.512011793125
  },
  {
      "address": "0x1c184fbdf2e49c6ca833e57e9c07b684df60ac68",
      "tokens": 5397.767981253377
  },
  {
      "address": "0x938a22c9f2f4913347a8c05f6bad7489fb59280c",
      "tokens": 5395.499293032009
  },
  {
      "address": "0x850b1fc9f7ba4e555e35ba908f2d884c863a5f5d",
      "tokens": 5375.19653800396
  },
  {
      "address": "0xcb60d0947709e568d0e00f6770109fb0680e1549",
      "tokens": 5337.882401348323
  },
  {
      "address": "0xedecc758a4972225548708c1b69c22233a1a8635",
      "tokens": 5298.397113547846
  },
  {
      "address": "0xc87fbc6a1124fc242001b302ce5df05bdbf6c736",
      "tokens": 5292.133484123234
  },
  {
      "address": "0x143f774e82033ab5c557bd9033856324628a90a4",
      "tokens": 5286.109680016223
  },
  {
      "address": "0x2f6f014ba6cd1504aaf895b5b68ddedf42ec60ea",
      "tokens": 5274.992985189669
  },
  {
      "address": "0x429a9009dd98e374b9bc137431d17ede3af1cea0",
      "tokens": 5267.110091425255
  },
  {
      "address": "0x0d55f3c13dcfb8ba0c93423d565de7fde7ba8b03",
      "tokens": 5256.960702379267
  },
  {
      "address": "0x9a2a74bcb42f839a0fbeb09e1c67ab7c32040921",
      "tokens": 5248.272278131915
  },
  {
      "address": "0x668f3654a2fec463aa703aaa5b61aa25b192550d",
      "tokens": 5214.228457582283
  },
  {
      "address": "0x5714f3c0df4161fa4c7193cafcfbfdef6bea0fc2",
      "tokens": 5197.879441176563
  },
  {
      "address": "0x1ad432c5ea2ed5cad93eef708c9c26762529d251",
      "tokens": 5061.194757659137
  },
  {
      "address": "0xd4d924048eb014a0a0fee45c9256b75d15cee1e7",
      "tokens": 5131.5253252618895
  },
  {
      "address": "0xfe7bdd4e4dc00af29a2fe73fe98525cd8b7e3a2f",
      "tokens": 5031.070529440907
  },
  {
      "address": "0xaaa8888ac9a86dea9d86a626c2b9819963908fb4",
      "tokens": 5018.052419658022
  },
  {
      "address": "0x2c193d3780af10dd11c630453b1a9bc751139065",
      "tokens": 4996.7485544053125
  },
  {
      "address": "0x9b7bdb506da65ca6f68db58e0687b8b283c19f6b",
      "tokens": 4995.101721315669
  },
  {
      "address": "0x617a9e3ab3bf0997907748cd84f022cb391dba22",
      "tokens": 4971.592259650883
  },
  {
      "address": "0xcea8392915ea16da473045b7d0255e8b48cc5ef6",
      "tokens": 4941.650837160666
  },
  {
      "address": "0x9b01a2bfcc1d27b12ebbc9cc3804e0df3b8a20a9",
      "tokens": 4894.826418245874
  },
  {
      "address": "0xe440fd71eb60c5e35ac90d6b2fa01ffee0cfdf44",
      "tokens": 4634.853324976321
  },
  {
      "address": "0xf429f5145f41ba19694a411f05a7a54427e0ad72",
      "tokens": 4860.5907256041655
  },
  {
      "address": "0x385121a132c9dbce9c9c1a087767cf7a52c66c9f",
      "tokens": 4853.009210131161
  },
  {
      "address": "0x4f502c3aa7110afd52cc3f91f5227e9354fd318a",
      "tokens": 4804.381903916839
  },
  {
      "address": "0xcd36658d4c73924dd614f27907912580d4631bf9",
      "tokens": 4776.669572097171
  },
  {
      "address": "0xebcd2267e7350cf64adc4fc21b43b4f5ae1a3ba5",
      "tokens": 4757.592412961848
  },
  {
      "address": "0xb5473f6f550529183bca0a3b049cb00204181234",
      "tokens": 4732.374204171368
  },
  {
      "address": "0xde6bfba95135e2c2661e928274eb87c69ec52c4d",
      "tokens": 4651.841803326937
  },
  {
      "address": "0x9af9450d2e44acf594f9164ba599120fc4eeab1e",
      "tokens": 4630.823575060291
  },
  {
      "address": "0xef831fca11e76b6d8913641a50c8d9d50bf1b7bc",
      "tokens": 4621.759532046135
  },
  {
      "address": "0x06c30facb0fa18a67723240e41bb8aaff1684b02",
      "tokens": 4609.558519162698
  },
  {
      "address": "0x16cbb466e0d719f1c18caad33ecd07df802295c9",
      "tokens": 4594.916059896314
  },
  {
      "address": "0xc47af17f0a8557bcb09fd07e4e7823bc475b5d64",
      "tokens": 4551.260688586595
  },
  {
      "address": "0x7a53330dc8f2d46a2bf06dd7da5bb1b98e38f887",
      "tokens": 4535.913471364534
  },
  {
      "address": "0x26324bb20ab4e48ff4155c92ebb328c6fdcf56b3",
      "tokens": 4477.222289138065
  },
  {
      "address": "0xbbe4a3fe5c6be7818a69023c0971ad518dba58f5",
      "tokens": 4477.070089748225
  },
  {
      "address": "0x89129048ffba54519f8c2464252173fc3966b163",
      "tokens": 4423.075591859697
  },
  {
      "address": "0x972d06424cb5480724704f6452f3ff1b0ed66787",
      "tokens": 4412.991958365595
  },
  {
      "address": "0xd76ad9be610060b18798151885a7a34ec8c415e8",
      "tokens": 4410.884150950643
  },
  {
      "address": "0x5dfb912ee47b1901ba3ec3f8025083e669f20068",
      "tokens": 4394.2549096930115
  },
  {
      "address": "0x7b530daebd75f9bfd1d286beb06ccadb87b593c2",
      "tokens": 4372.545604633774
  },
  {
      "address": "0x4e36ae9e72c0094d7cfe05dbc770b4d55ca9946b",
      "tokens": 4367.034919485676
  },
  {
      "address": "0xff7c7047f9a199beee4daf638da48a02481c854f",
      "tokens": 4330.397444282219
  },
  {
      "address": "0x59424965f44382e89d3b75608024638edbb26d06",
      "tokens": 4328.945123565867
  },
  {
      "address": "0xecc5f6d537adb6b61fbebd0f5c92089fc621d943",
      "tokens": 4312.713328402558
  },
  {
      "address": "0x2df39aa00b8b586303191410e852f434c54daa0c",
      "tokens": 4278.2888425982555
  },
  {
      "address": "0x82190e46b1c53cc2d9f34ef1057097ff1591af8f",
      "tokens": 4256.41850020414
  },
  {
      "address": "0xb35f5791477adeda54823e93ac8e89f38bf8803a",
      "tokens": 4241.133990599197
  },
  {
      "address": "0x23392f827c7e1faaec4c0cb8129178037d4e5a2e",
      "tokens": 4233.672003905576
  },
  {
      "address": "0x1aea956a6be1950a43017da2d08689fc1eeba780",
      "tokens": 4144.515032591192
  },
  {
      "address": "0x265b4e4644d1ada7f5da90416338d00de194ba9b",
      "tokens": 4140.114121664157
  },
  {
      "address": "0x3abf7a748875634a4788de128edfaf351ef18724",
      "tokens": 4135.955382378463
  },
  {
      "address": "0x561e69daf55a8aac45e5d6178256fbb815640d0a",
      "tokens": 4040.7422708064464
  },
  {
      "address": "0x5a58085089f5e4507d17260cf8ede6b7d18650b8",
      "tokens": 4025.1720050475187
  },
  {
      "address": "0x25740e7b5b82c4018294044d194897c8b35371c0",
      "tokens": 4018.1005023682587
  },
  {
      "address": "0x8c6f49dc306db870703a1712a748c87ecb5e6846",
      "tokens": 3972.947678511509
  },
  {
      "address": "0xdc1c4795ea67061322a9c3486ebc3f2f182c865a",
      "tokens": 3929.954308244224
  },
  {
      "address": "0xb895099def13c4d9cf6a75aa645eef5f67b717be",
      "tokens": 3924.798247955348
  },
  {
      "address": "0x82b4884fdb9ba1d0e5ade6cbe87c81b7e0a69704",
      "tokens": 3903.638013513588
  },
  {
      "address": "0xebcc17cdcaf9171bc2c5bdf4487b9d064dcbaf3f",
      "tokens": 3776.135827054925
  },
  {
      "address": "0xe9529ca04ee27e5a739453674d60d06a56f374f4",
      "tokens": 3883.645059253518
  },
  {
      "address": "0xb918e63a6351b3f4b25122895371f8012e4e3eae",
      "tokens": 3754.443797597504
  },
  {
      "address": "0xa274e8837079dffe212e99848bd067a1b4b000a9",
      "tokens": 3703.795605862098
  },
  {
      "address": "0xe7cb2c46d54a87d822848612b7217af7479666d9",
      "tokens": 3351.150728480676
  },
  {
      "address": "0x086e6ea45a3bc4bc55688d0b655f4c8011421681",
      "tokens": 3682.2844973457395
  },
  {
      "address": "0xc119f56aa79522cdfb719888652e4ac4221d4677",
      "tokens": 3681.7165790205772
  },
  {
      "address": "0x3411bb0295948e02dc623770804964fb9d3be963",
      "tokens": 3675.34402491748
  },
  {
      "address": "0xe453e194b8b4aa0b69bd937568246cf20da9c8a6",
      "tokens": 3672.9657008307204
  },
  {
      "address": "0x48cbbebea738ffd9f2032ceeeac415467c2c1e92",
      "tokens": 3655.9651361136694
  },
  {
      "address": "0x6b67c05818f947c730466a629153485d09618b63",
      "tokens": 3630.358995296206
  },
  {
      "address": "0x11a8c9db8475a330e42c5097c65caf623f9b0082",
      "tokens": 3624.672018519505
  },
  {
      "address": "0x2931c5978d8c03ab864fd03a5cf6f71eeda9eec0",
      "tokens": 3618.1226785285294
  },
  {
      "address": "0x5b103f75a2524be7552b7138ad1675e70b791b2c",
      "tokens": 3611.3647646925156
  },
  {
      "address": "0x911c1f8e9f0bd1b29779c927fcc84c70915a8ed2",
      "tokens": 3605.241597948173
  },
  {
      "address": "0x7968b5eab3c03162cd276843740187008ae74669",
      "tokens": 3603.324824842665
  },
  {
      "address": "0x847b4960a5b93af2f590b368484051b7cb542dca",
      "tokens": 3574.2047453046425
  },
  {
      "address": "0xeb306793eb3543ad066c4a1e090667fe55c6eba6",
      "tokens": 3573.813118634442
  },
  {
      "address": "0x2c2f5c588ac2b38e515753d4447ce7a9c904c2aa",
      "tokens": 3572.611480828214
  },
  {
      "address": "0x3c5cf073ea0c719d02643a5f8a3929ecb8bae042",
      "tokens": 3565.5721267089434
  },
  {
      "address": "0x813d9afe8da7768c468d5330bb18175916f29c7f",
      "tokens": 3558.8957617950105
  },
  {
      "address": "0xf12b54257dd9cf7524915abfb1ee6346cc9f586b",
      "tokens": 3552.93101725848
  },
  {
      "address": "0xb9309483c8237bbfb23059b8f9e6e8b2c01e55eb",
      "tokens": 3530.291420313913
  },
  {
      "address": "0xa30f64290bf5510ef953670b8a85faa54c96104a",
      "tokens": 3521.9586835214227
  },
  {
      "address": "0x92fc0bb3c7648809c4982681805875aa94b957db",
      "tokens": 3495.8210450465763
  },
  {
      "address": "0xe36e7c9628e88d670671bbb6ecd0326585bd6c80",
      "tokens": 3459.0843449791764
  },
  {
      "address": "0xe41e8034901780583c6ce6d4db349873c24e429f",
      "tokens": 3458.685190825806
  },
  {
      "address": "0x44bc524d613bac87d75d9d856d33024e25e869de",
      "tokens": 3418.1846749632136
  },
  {
      "address": "0x74369b452568e2e13bdeb0314f4af2ca540027c8",
      "tokens": 3397.0928529248276
  },
  {
      "address": "0x846a50394ddc7877bf18e3a34662c3f8baeea7db",
      "tokens": 3385.671268379268
  },
  {
      "address": "0xf60e0b28dab3a6525f2b5f3a6c7d838e7c726821",
      "tokens": 3373.9181619764017
  },
  {
      "address": "0x82ad4c0c3ca0e4ba5946938846afd51f15532512",
      "tokens": 3350.4883662247544
  },
  {
      "address": "0x06fb7949974ce4270d631f1704bc0170be4bbc49",
      "tokens": 3334.174590499944
  },
  {
      "address": "0xcda355ff19abcb615c7a966a70d08b8c3b53f91a",
      "tokens": 3277.381087271195
  },
  {
      "address": "0x96b48f0104ca135d938c7343068c4a1257f2810f",
      "tokens": 3238.331730350671
  },
  {
      "address": "0x9a11f826b680c6a94c98d0afd24ca1604fddebef",
      "tokens": 3157.582618508863
  },
  {
      "address": "0xeed0ad1289adfd31ed796a5ec51739a14edcaeee",
      "tokens": 3114.544513536953
  },
  {
      "address": "0xf0f2908b19c9cafad5183573d3b7fcb89c2f84f4",
      "tokens": 3107.9561806359375
  },
  {
      "address": "0x087be81acb676a0ac749a6f412d77b9467eee40b",
      "tokens": 3107.900642032864
  },
  {
      "address": "0xc95141416eb8876f43aa6446b113fc6e8fbbe3e1",
      "tokens": 3083.465735865446
  },
  {
      "address": "0xe5db86ed7541c6503f6fd09cc0eade5d98fc5042",
      "tokens": 3081.674399431998
  },
  {
      "address": "0xc54844ef5b0fffb5ae916015c336317b5ef5383a",
      "tokens": 3052.7535266659584
  },
  {
      "address": "0x361488c128986a9cf00e9f45069f64698404dc97",
      "tokens": 2947.0458668800125
  },
  {
      "address": "0x18fde3c70dd768768d8fec4c18f65de9319fcd1f",
      "tokens": 2930.5208984644687
  },
  {
      "address": "0x29345ddc0044bf55a8516723008a57ca5a8fd510",
      "tokens": 2894.709945152663
  },
  {
      "address": "0xd18e1f3c452413eaf3554eb6cc0895cd5710d607",
      "tokens": 2889.3163603227804
  },
  {
      "address": "0xd7c30fbb16114ee9c9fffb544c14e0c0bbaaaabd",
      "tokens": 2880.8154724212263
  },
  {
      "address": "0x1167a915f2c6d48e6d4885d6b35f1e5821a2838c",
      "tokens": 2763.839646972893
  },
  {
      "address": "0x9e506c2867030f550bbac30820f5ec1c755ce5ee",
      "tokens": 2729.5524163637124
  },
  {
      "address": "0x5cdea79c819aca28ea45602523fd628a90f5e66f",
      "tokens": 2719.284037314021
  },
  {
      "address": "0xd2553b673fffd25cfcbb345c48c74cc17af1f374",
      "tokens": 2710.72202663734
  },
  {
      "address": "0xbcbe9b878543b9d4098497c67f1e95bc44a0b34c",
      "tokens": 2577.8967536389027
  },
  {
      "address": "0x0833cb8da586b0d01d04df979f52638002c28e85",
      "tokens": 2664.3716212423437
  },
  {
      "address": "0x1e537a956dfde169fa5797448aaf104787f3c623",
      "tokens": 2646.143189233684
  },
  {
      "address": "0x66289c643711b973d707640e8fc45e44557faecc",
      "tokens": 2639.829975565375
  },
  {
      "address": "0x384f2f93517b56bdf552dd822e0456c4fa998fff",
      "tokens": 2634.6393996582233
  },
  {
      "address": "0x14ce707cbecacee9dbe38e2285c3c1f0f7cd4722",
      "tokens": 2595.636718163947
  },
  {
      "address": "0x0878708a658b48734adedbf421c7a630058ba141",
      "tokens": 2572.101763887596
  },
  {
      "address": "0x1faab119c0b2447b098fc937994fd4c0f0c63431",
      "tokens": 2548.4364625798353
  },
  {
      "address": "0x401e09a5e129a84a6e34657782fe64dbb984d09f",
      "tokens": 2533.590683063188
  },
  {
      "address": "0x8082b94327bab4e8fb95cdc4bbd7ed68298254a3",
      "tokens": 2521.6021797347125
  },
  {
      "address": "0x7aa9fe51e2b197476850005de4b5b23b8b4f147b",
      "tokens": 2518.7159864627156
  },
  {
      "address": "0xe50fdc8a243b6d0cd1f629efa5a19d209fdbe651",
      "tokens": 2493.1200165811197
  },
  {
      "address": "0x45ebced27f818797ae88294f333fa3b112dc6867",
      "tokens": 2485.013751865527
  },
  {
      "address": "0x78a8ae47e9189140e8780aba463dbf273a1ca170",
      "tokens": 2469.7812702666565
  },
  {
      "address": "0x840baa2595f45c3080eaf48b4bfead40ccd8aa23",
      "tokens": 2463.226688867938
  },
  {
      "address": "0x9f50e330a0f47dc5d2faaf7a4089f7af380789b2",
      "tokens": 2460.6912041124274
  },
  {
      "address": "0x4c9db35002373d50988ba91bae5afc8f28d6fcf1",
      "tokens": 2448.396106955094
  },
  {
      "address": "0x8d5baa98762a1511897719e492a5413ba66ee243",
      "tokens": 2431.7921511764484
  },
  {
      "address": "0x736177e8650f0bca21bdcbb5334cc5c81184b6f3",
      "tokens": 2429.4584402105847
  },
  {
      "address": "0x234f71cf381189b04d5b115580ec07362f74013b",
      "tokens": 2424.2287950495765
  },
  {
      "address": "0x7cacca8ce75eaf50735ebdaeba8d12f0a759efd9",
      "tokens": 2419.8254247133386
  },
  {
      "address": "0x3e5fffaf17a2285c3d358e6891738f7be56c014d",
      "tokens": 2397.890591313816
  },
  {
      "address": "0x836a05bbeb4b1968413d07b8f50cbf61b245e471",
      "tokens": 2394.3080692753792
  },
  {
      "address": "0x86cc75d71ba7778593f7669d1b8275eec1c6d5c2",
      "tokens": 2391.2418093125116
  },
  {
      "address": "0xa3cc3b3e39ae61b3155b9f288686fa5f5fbf3389",
      "tokens": 2382.4591868412413
  },
  {
      "address": "0x808846ee52c73666908450873c4536fd21c262d3",
      "tokens": 2369.6740982003653
  },
  {
      "address": "0x484aa87c781243893fe4330ce5023d53208a1d67",
      "tokens": 2365.9741563611415
  },
  {
      "address": "0x10f9e39dcb760a3a7e1985e76a33baaa759f0d9a",
      "tokens": 2362.801385536672
  },
  {
      "address": "0x9e99bf04d85e902dc96c21f410549e30d2b2dfcb",
      "tokens": 2355.420641046095
  },
  {
      "address": "0x0ead40fa859cd2e224c0d7a547470b1b07b7c838",
      "tokens": 2354.2562927168606
  },
  {
      "address": "0x66f6ad595cc884c50f3e854adc66482dddb862bf",
      "tokens": 2349.9197270062127
  },
  {
      "address": "0x58857a42ab93a1d25950e32e357a0596e8f5d3b1",
      "tokens": 2340.397711007997
  },
  {
      "address": "0x9892fadc79d94a5aecf4fe519677199ccfeafe03",
      "tokens": 2237.0602433590852
  },
  {
      "address": "0x9d465d1724fb5a932d3eea5b75386849fd21b978",
      "tokens": 2233.96140058172
  },
  {
      "address": "0x5bc2a992d53fb68002a37aa0dfad5c09c348bbf6",
      "tokens": 2213.1114819484924
  },
  {
      "address": "0x426240ead0592e195cf492d1c270f893fbadd01c",
      "tokens": 2203.2133828021642
  },
  {
      "address": "0xc8daa78d107b1edecd951f4f9f14b8a6ea659013",
      "tokens": 2147.9201057762907
  },
  {
      "address": "0x8ea7f08d707b25ff5030674050efead6cf849128",
      "tokens": 2133.7378218327235
  },
  {
      "address": "0x9622e4f9112c6c2a0eaa829e3e88a22b93042828",
      "tokens": 2119.7252417647446
  },
  {
      "address": "0x6cc5bb86707cb81a4f36f4bae966ee17170c8074",
      "tokens": 2107.462564291659
  },
  {
      "address": "0xaf0eec045aed70c8f98dce28038c1cf54b5f176e",
      "tokens": 2058.5791803091693
  },
  {
      "address": "0x777c97ce5d89a135f42ec499e95f75c3402226e5",
      "tokens": 2051.7165676701466
  },
  {
      "address": "0xd6212252234799fd623c88494f59bc3be5f23e8e",
      "tokens": 2047.7636044942226
  },
  {
      "address": "0xa094d87e5b572e4288edd3fafbbe9c549b5a346e",
      "tokens": 2020.935151258262
  },
  {
      "address": "0xdc7b3e243ed2ab68089ada865edd4aaf8e995b8c",
      "tokens": 2002.0610634935751
  },
  {
      "address": "0x9bd6ceef28c05db87816d0f2ee3ee3b6e95c3886",
      "tokens": 1987.142429487867
  },
  {
      "address": "0x4b114d7b01cfd5f3346d87615c11b95795b68a25",
      "tokens": 1977.089879095211
  },
  {
      "address": "0xbba26acd48861d5448e023d646fb491bebb64190",
      "tokens": 1939.9683818924782
  },
  {
      "address": "0x5571985b91d0c0402faa27b142363e534e30cb5d",
      "tokens": 1949.3055097692327
  },
  {
      "address": "0x626949405d1f0017411f758c99a0e12fbd9c3485",
      "tokens": 1945.1844422148426
  },
  {
      "address": "0x59c88ab53568103322fd30c04b08b36d83d310d5",
      "tokens": 1892.732788301836
  },
  {
      "address": "0xe71239927116d85064d8636af3315b71f5c372e9",
      "tokens": 1865.210961057411
  },
  {
      "address": "0xbeec578b93479b4089abdd70b387b3e02284de5c",
      "tokens": 1859.8511590982532
  },
  {
      "address": "0x7eec48d43fac9e60d49bba8756fd965aa6942997",
      "tokens": 1855.5019990636933
  },
  {
      "address": "0x532283d6adcdd69299ceff59aa8f44e55cefdf04",
      "tokens": 1799.9173770464508
  },
  {
      "address": "0xae5e6d0951245d5eaa0650e5e05e828a6e862717",
      "tokens": 1799.1969553488768
  },
  {
      "address": "0x456d76430ff80bcfeee9fb4c3feadc2144dcb47a",
      "tokens": 1783.7474199734384
  },
  {
      "address": "0x9fc8daa66799e0a01ed100c659e176af193fbe6c",
      "tokens": 1771.728057512049
  },
  {
      "address": "0xd87000155288a889e528b51865e56e1339b899c7",
      "tokens": 1717.959174349376
  },
  {
      "address": "0x7c7feb2aaa37b3418e7e8cb1aa4f8875527cc306",
      "tokens": 1706.7734719968091
  },
  {
      "address": "0xf04d5069ab090b7115bce987b55e42e59c0259f1",
      "tokens": 1676.6132044448616
  },
  {
      "address": "0x6a3790c297bb034ba4455365675fa8c1ad53eedf",
      "tokens": 1676.0505257648153
  },
  {
      "address": "0x125e577f580857d7af995d20104c6c7b96a3274d",
      "tokens": 1669.6870910322727
  },
  {
      "address": "0x7e717fa613f461dca4bb9b03e2b112f48d428d73",
      "tokens": 1646.8339439910717
  },
  {
      "address": "0xf3ccb4c6b1f28050740382a3313211d64cdb8031",
      "tokens": 1631.7377473800443
  },
  {
      "address": "0xe9d0cde1bdd3fbde735c94f6446e1f5ea750d81e",
      "tokens": 1565.078662287041
  },
  {
      "address": "0xd09d4532bdc6896aab56f0788938ce46e64fb66b",
      "tokens": 1541.934978994805
  },
  {
      "address": "0xfccd91ec5a81685dfd6156e9f3c2133e5cae8af4",
      "tokens": 1504.595471302806
  },
  {
      "address": "0xc6b279271d89d5cdae0ff472ecba9e9d9f550a18",
      "tokens": 1474.949871614955
  },
  {
      "address": "0xd0742694d5c30db48692dd0ab8d6ca7db1b1564e",
      "tokens": 1455.1116611931177
  },
  {
      "address": "0xa04f89d5fcdba56591f6fa0b921af2a0434c1364",
      "tokens": 1448.6369633627983
  },
  {
      "address": "0x95d78df2efb4cf0f51707dea80e4fc5b8c851faf",
      "tokens": 1409.4997912730262
  },
  {
      "address": "0x1e77444d6d6d53133cf1db6acedb99b38dd1e5a6",
      "tokens": 1408.2928577195041
  },
  {
      "address": "0xf35d91dd6e7081cee1c6ca22297bcd4237ae8425",
      "tokens": 1378.8626788585545
  },
  {
      "address": "0xe1e508da9813cbff020785717aef13d66a947167",
      "tokens": 1371.6670613348679
  },
  {
      "address": "0x383f95a0c543079aad6d20288eb999eb4b94a592",
      "tokens": 1363.382266160065
  },
  {
      "address": "0x399f8716b89b5e45691d0a60993f6ce9ff83677a",
      "tokens": 1333.9455608128865
  },
  {
      "address": "0xecf773cd30e48788cf9096e3dad715c273eb4e4e",
      "tokens": 1319.3446276669806
  },
  {
      "address": "0x6fe43a9f54eec22998fdd10c1b90b6c27e40d855",
      "tokens": 1317.756315924926
  },
  {
      "address": "0xdbea6ff6d56d689fd5dfef12108086a5fe03a961",
      "tokens": 1301.6431850431616
  },
  {
      "address": "0xdcfb38debed92d2a4aa2e587fa1acd9f95e03a87",
      "tokens": 1294.515210312774
  },
  {
      "address": "0x6de781a52daa0db225288e190d0bdac0967f42a6",
      "tokens": 1288.874624179342
  },
  {
      "address": "0x758157cd334a8d3ae91cde40a8ee796773f5dee2",
      "tokens": 1275.8752805841523
  },
  {
      "address": "0xb76bf7bcc44f9a10c501a2403b72ee4b7a195db8",
      "tokens": 1269.3296384695564
  },
  {
      "address": "0x6d34623ad834c61ae536f8d988a1f52ecf30c40b",
      "tokens": 1266.795341531594
  },
  {
      "address": "0xd7ffddbf1979c09cc6c6a30a95686c69654641b8",
      "tokens": 1248.8481541308827
  },
  {
      "address": "0x12f2b10be6f1f8896ec2b676186a566148f9f2bb",
      "tokens": 1248.2066162047693
  },
  {
      "address": "0x8f6220bb8d106cf22415b8fed4d061f90cb5702e",
      "tokens": 1247.825106838643
  },
  {
      "address": "0x45bab17bf73b943ba429680f67f0a8738f423531",
      "tokens": 1244.7054890705165
  },
  {
      "address": "0x7e7544a2efbc0adec567b32fbf7e8f7b3b864813",
      "tokens": 1240.8137620558261
  },
  {
      "address": "0x5f94c92297da9094c22d5c13668ba2bb45c8b376",
      "tokens": 1228.4725682556236
  },
  {
      "address": "0x72e0876eb52087e571aa64f9b5b8b29bce04599d",
      "tokens": 1216.8970286973192
  },
  {
      "address": "0xe35b3b78457f37209fe9acc7af10bb569a30fbc3",
      "tokens": 1205.2672600335302
  },
  {
      "address": "0x8e8600cf8b6287b8c3876c056700923249d27821",
      "tokens": 1205.107709140458
  },
  {
      "address": "0x11f21e7fda19a6b2bdc38f3508893e913639ef95",
      "tokens": 1198.957925091368
  },
  {
      "address": "0x1c51684c69704798c017482ad93fbc684607b0f9",
      "tokens": 1183.3327214430242
  },
  {
      "address": "0xd4ad543ba29aa0158c2b5dcf364dd1a88422625a",
      "tokens": 1181.2168140618148
  },
  {
      "address": "0xc8fa49836e8b355c87b19dc1943f5a1e6fbbb7b4",
      "tokens": 1167.4527496345552
  },
  {
      "address": "0x606cae383e787261ee47d928ecb9e1a14e1ebeda",
      "tokens": 1163.7374567991578
  },
  {
      "address": "0x056ee0fea250bca3b49bbf790d538b6f08e7adc4",
      "tokens": 1162.6813757949074
  },
  {
      "address": "0x4b45cc24f87993cb9b8b76fcf99abd495d504036",
      "tokens": 1154.9116265379168
  },
  {
      "address": "0x23414f1200f75eb64bcc12c93f759fc7751e3282",
      "tokens": 1148.9788795974448
  },
  {
      "address": "0x331116a7f710f68be133fd87063a9872ccbc3381",
      "tokens": 1147.6336325297057
  },
  {
      "address": "0x62e185b1c13728d9802380d8518762b9a2ae4227",
      "tokens": 1143.0815234357271
  },
  {
      "address": "0x331164ccc0e0daee2a92a347b51fcf48016fbd7c",
      "tokens": 1135.1457981386934
  },
  {
      "address": "0xe7783fff5112e9cef6d28719ae2b21d5266916c3",
      "tokens": 1129.909853716813
  },
  {
      "address": "0xa244711afd473caafa99d6f07b9db5637d3f1643",
      "tokens": 1060.1414142829901
  },
  {
      "address": "0xd8e84f61e137b5063ba96555c0031acb4183f6bb",
      "tokens": 1056.4611125382096
  },
  {
      "address": "0x47584f11a998c19dda33d8ca4002fbe892ac899b",
      "tokens": 1043.1453824647422
  },
  {
      "address": "0xee05979691884629be7886770aebcde1b06c6493",
      "tokens": 1029.8525433604138
  },
  {
      "address": "0x1634139cb0df71fd2c49dc0c1a60b20e8435f39f",
      "tokens": 1029.5055989910588
  },
  {
      "address": "0xe7107de3e5c014654da7bafe17e203c32ffcfe04",
      "tokens": 1027.517138883657
  },
  {
      "address": "0xb5220308ead7dd1d61d2a2b07cf3de6a86881845",
      "tokens": 974.2802209099568
  },
  {
      "address": "0xdc623f8a45b4a280c7dbe0a10a8b74e4ecae1c7b",
      "tokens": 907.164066167616
  },
  {
      "address": "0x4878a4fa8acc2e0ff1ea45eed4a55073c204ecb1",
      "tokens": 852.6226060618635
  },
  {
      "address": "0x4790ba847bea14b9bf4d6cf548967092f0b277e0",
      "tokens": 839.903591977908
  },
  {
      "address": "0x63ab7adbcb46a904b63612d4282dbf5b5fac0d1f",
      "tokens": 803.3150306840059
  },
  {
      "address": "0x409f7857515b8d9f7ca978adc4a1d4096d56e985",
      "tokens": 763.6039845690051
  },
  {
      "address": "0x7cd29c6713db2dab1b0777aa30f972a7387d1ccb",
      "tokens": 737.9579728368501
  },
  {
      "address": "0x970dd66eb060dd2710f72a993d6eb72ef2194ccd",
      "tokens": 733.4424216082056
  },
  {
      "address": "0x3b07cf9ed087faef9d11fa466abfd5528c820e55",
      "tokens": 722.0733446730085
  },
  {
      "address": "0xd6985a60e073bd52313700c7a2dee2bcd65258b8",
      "tokens": 698.7182293819787
  },
  {
      "address": "0xaf5d969790b5fe641b98e244df21d2bfcf8df94b",
      "tokens": 686.7897721464966
  },
  {
      "address": "0x3f86365deda2e295d1193b1a0002469fb454df49",
      "tokens": 684.9981309275953
  },
  {
      "address": "0x30362fc9356ae548cf8443c754f6c9e8833d01b9",
      "tokens": 670.3024325724018
  },
  {
      "address": "0x4ba0ae38ce9109cc0f5b8a6a439eb0f742dc1395",
      "tokens": 641.7085808285444
  },
  {
      "address": "0x352e237e650a099a936d1e45666a3a475d68cb08",
      "tokens": 634.4111570293289
  },
  {
      "address": "0x46a2d5ebfe127eb489a03f061dc1b9ea2e658fec",
      "tokens": 633.397670765797
  },
  {
      "address": "0xf773019b577a25328cefa51dc4067e7887708409",
      "tokens": 633.397670765797
  },
  {
      "address": "0x0b18f523d98746c3a5bb6be8150f1663089d65fa",
      "tokens": 633.397670765797
  },
  {
      "address": "0xd634d4b5bc341ac22afc68c37d4d5ba9a45e1484",
      "tokens": 633.397670765797
  },
  {
      "address": "0x1e0d97ebe103adc8a697be617479584e787ca9bd",
      "tokens": 633.397670765797
  },
  {
      "address": "0x46376db12b341ed1993b9bb56fc13e51d3b6e750",
      "tokens": 633.397670765797
  },
  {
      "address": "0x47fb574a0e9945609f3b373638c8baa443186862",
      "tokens": 633.397670765797
  },
  {
      "address": "0x0f4fc2d34d88e21d3a7c3b9a80af1f013b7b6b3a",
      "tokens": 631.6535941611945
  },
  {
      "address": "0xdcd6330a1c18b35cc4a2497be53396a53d9a215d",
      "tokens": 626.0232677646868
  },
  {
      "address": "0xa1df4707c6b98f62b5b5655cf909da0e0176e5e5",
      "tokens": 619.40225123545
  },
  {
      "address": "0x4674d71bf2258b751bc107afc6d1f65091ffa830",
      "tokens": 611.0498254151239
  },
  {
      "address": "0x63bd1c318a51957adb5a8968ee3e2b321c3cdd32",
      "tokens": 604.4271943643262
  },
  {
      "address": "0xf5e18146ffd63a95df4b4ad8f0e25dad795cbcca",
      "tokens": 602.8160047375717
  },
  {
      "address": "0xd9887922f96218755dcbc5dd8a1f9784f5d22f05",
      "tokens": 596.2561371291788
  },
  {
      "address": "0x83a0d22a815bee2cb510eb370a9cc5fbb2c167f7",
      "tokens": 592.7758775176396
  },
  {
      "address": "0x34aab656a55733c62304eda82471ecb043aec918",
      "tokens": 590.9101762078626
  },
  {
      "address": "0x5a299eae8068560a19ac7010a27b8ae00da97473",
      "tokens": 561.6620945815774
  },
  {
      "address": "0x0832e2d1f6b6598f6f782eb8b4759104a6099b7a",
      "tokens": 533.6344690456442
  },
  {
      "address": "0x4d4fd8319bdc7955b2247ed069af2ef155b6296b",
      "tokens": 505.0855303142964
  },
  {
      "address": "0xea74e6c4b7f1fb2396a452d0eb352d3e7addcc90",
      "tokens": 492.0013128956443
  },
  {
      "address": "0x58a14911c7729a46829a942cc5ede8c4171104b4",
      "tokens": 477.3654567903468
  },
  {
      "address": "0xb0df27abe3e8f315f774f2cec2997410cc899b10",
      "tokens": 471.5217855370606
  },
  {
      "address": "0x08e08fcb398347432535c2333765cfd27e051dc3",
      "tokens": 366.5966415175581
  },
  {
      "address": "0x8870c3a7144fa301cd260311afb7f2319b19cd57",
      "tokens": 356.51779918519753
  },
  {
      "address": "0x7fe36c244f7cc706e43e0cfd0b164b814981b262",
      "tokens": 348.02173551802804
  },
  {
      "address": "0xffdb652009af7d2661a7bbaa8cc6edece70928c2",
      "tokens": 337.8863449885327
  },
  {
      "address": "0x7d62c5185c9dd9218b07bc891e6d196e5f991f72",
      "tokens": 311.8149622053424
  },
  {
      "address": "0x24bc7357362ce96a0d38ec64f3216147a5af8e54",
      "tokens": 299.19340451028654
  },
  {
      "address": "0x3d76d5a521c60ec5b5f0a4d36132c502c5923f3b",
      "tokens": 266.61510909267054
  },
  {
      "address": "0xc630ac5a52ff3b512d3d7f0a35f6ea4e440f51ae",
      "tokens": 262.7010919707939
  },
  {
      "address": "0xa20aeae5ae4d5e49c95132bed3e81f8e281552c3",
      "tokens": 215.49650380902304
  },
  {
      "address": "0xd3efa806242ec7e066c3037ef3339d45704b9744",
      "tokens": 215.13802239349002
  },
  {
      "address": "0x110ed6ff1e921017459e50a0e598b534b4b8da27",
      "tokens": 211.627937080432
  },
  {
      "address": "0x1538cdf5f3b345be5cf7d236467bfa5f6c35953b",
      "tokens": 175.23195857816233
  },
  {
      "address": "0xe0cace92f0a951dc46d1f035826d38d7e16a7d50",
      "tokens": 167.6848159389862
  },
  {
      "address": "0x83aa2724d45c9c849a6119ba5732a53d3f06b9bc",
      "tokens": 166.9988635617366
  },
  {
      "address": "0x16dd1508553951fe78bcb1ccb17d89271d31e1bd",
      "tokens": 164.34224763254346
  },
  {
      "address": "0x6fe150e29e4d560d4a1f40a46c2c75d3e4ffd163",
      "tokens": 157.9477200459383
  },
  {
      "address": "0xd5f890cc5ae8ee8009abaeffca336e2a406bb2f3",
      "tokens": 157.90468748156226
  },
  {
      "address": "0x4168fed40169b06138d583f8c5383668d2e22799",
      "tokens": 157.61130215093823
  },
  {
      "address": "0x90ebfdb2f5bbf195caba92c44a3313c7802aeb8f",
      "tokens": 152.01544098379125
  },
  {
      "address": "0xf9051a4e5ce8b93826438ae39822a9b69cd80f4f",
      "tokens": 150.85668920540644
  },
  {
      "address": "0x189a326047399257ac484ab2732c2ab151246d72",
      "tokens": 147.94244009494648
  },
  {
      "address": "0x94df6ae7c7db3d3e291c459d8ff935f037eb3cbb",
      "tokens": 134.15326198832636
  },
  {
      "address": "0x12053e0c6ec18f7f8448ce8034555f33b3fb102e",
      "tokens": 128.2253868125458
  },
  {
      "address": "0x44864ca9568a11cf31bf358b435b7e0a6a83c5eb",
      "tokens": 127.74890719958931
  },
  {
      "address": "0xc7a5a091447d083bb501c5cca76028760a676bbe",
      "tokens": 126.67953415315937
  },
  {
      "address": "0x301af726959880663e6c0f990d47d510d8c79e8a",
      "tokens": 126.67953415315937
  },
  {
      "address": "0xdba86a8f2fd45c9f7c67de6321202c42c2b602ea",
      "tokens": 126.67953415315937
  },
  {
      "address": "0xf54c60c90b7fdb51c6f4bf790bd7283fb5463372",
      "tokens": 126.67953415315937
  },
  {
      "address": "0x3b677d784775a0cec14e1277d648a41b9d9ff12f",
      "tokens": 126.67953415315937
  },
  {
      "address": "0x5709c5e197c2505f9639432909bc7578d9512abd",
      "tokens": 126.67953415315937
  },
  {
      "address": "0x4ab8a941aabd47f9564d5e36fd2f0fa1da66a235",
      "tokens": 126.67953415315937
  },
  {
      "address": "0x97f680adbb7aead02ae41ec983639025963e2f42",
      "tokens": 126.67953415315937
  },
  {
      "address": "0x6dd8eb8900e8d6ba08d593e751f12e88386f8de3",
      "tokens": 126.67953415315937
  }
]

function CTA({ address, holdings }) {

  const airdrop = airdrops.filter(airdrop => airdrop.address === address.toLowerCase())
  const airdropDue = airdrop.length !== 0 ? airdrop[0].tokens : 0

  const addrFilledColorConditional = (address !== undefined && address !== '' && address.substring(0, 2) === '0x') ? 'bg-green-600' : 'bg-purple-600'

  return (
    <>

    {airdropDue !== 0 ?
    
    <span
      className={`flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-green-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple`}
    >
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span>Your airdrop has already been sent to you. Your initial BNB loss repayment is in progress!</span>
      </div>
    </span>
    
    : null}

    <span
      className={`flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 ${addrFilledColorConditional} rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple`}
    >
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span>{(address !== undefined && address !== '' && address.substring(0, 2) === '0x') ? holdings < 10000 ? address + ' - YOU NEED TO HOLD MORE THAN 10K TIKI TO RECEIVE DIVIDENDS' : address : 'Please input your address above'}</span>
      </div>
      <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9b76D1B12Ff738c113200EB043350022EBf12Ff0" target="_blank" rel="noopener noreferrer">
        Buy TIKI <span dangerouslySetInnerHTML={{ __html: '&RightArrow;' }}></span>
      </a>
    </span>
    </>
  )
}

export default CTA
