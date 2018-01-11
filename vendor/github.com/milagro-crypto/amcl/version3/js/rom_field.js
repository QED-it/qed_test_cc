/*
	Licensed to the Apache Software Foundation (ASF) under one
	or more contributor license agreements.  See the NOTICE file
	distributed with this work for additional information
	regarding copyright ownership.  The ASF licenses this file
	to you under the Apache License, Version 2.0 (the
	"License"); you may not use this file except in compliance
	with the License.  You may obtain a copy of the License at
	
	http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing,
	software distributed under the License is distributed on an
	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, either express or implied.  See the License for the
	specific language governing permissions and limitations
	under the License.
*/

/* Fixed Data in ROM - Field and Curve parameters */

ROM_FIELD_25519 = function() {

    var ROM_FIELD_25519 = {

        // 25519 Curve Modulus

        Modulus: [0xFFFFED, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0x7FFF],
        R2modp: [0xA40000, 0x5, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        MConst: 0x13,

    };
    return ROM_FIELD_25519;
};

ROM_FIELD_256PM = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_256PM = {

        // NUMS256 Curve Modulus
        // Base Bits= 24
        Modulus: [0xFFFF43, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFF],
        R2modp: [0x890000, 0x8B, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        MConst: 0xBD,

    };
    return ROM_FIELD_256PM;
};

ROM_FIELD_384PM = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_384PM = {

        // NUMS384 Curve Modulus
        // Base Bits= 23
        Modulus: [0x7FFEC3, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0xFFFF],
        R2modp: [0x224000, 0xC4, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        MConst: 0x13D,

    };
    return ROM_FIELD_384PM;
};

ROM_FIELD_512PM = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_512PM = {

        // NUMS512 Curve Modulus
        // Base Bits= 23
        Modulus: [0x7FFDC7, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x3F],
        R2modp: [0x0, 0x58800, 0x4F, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        MConst: 0x239,

    };
    return ROM_FIELD_512PM;
};

ROM_FIELD_ANSSI = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_ANSSI = {

        // ANSSI modulus
        // Base Bits= 24
        Modulus: [0x6E9C03, 0xF353D8, 0x6DE8FC, 0xABC8CA, 0x61ADBC, 0x435B39, 0xE8CE42, 0x10126D, 0x3AD58F, 0x178C0B, 0xF1FD],
        R2modp: [0xACECE3, 0x924166, 0xB10FCE, 0x6CFBB6, 0x87EC2, 0x3DE43D, 0xD2CF67, 0xA67DDE, 0xAD30F2, 0xBCAAE, 0xDF98],
        MConst: 0x4E1155,

    };
    return ROM_FIELD_ANSSI;
};

ROM_FIELD_BLS383 = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_BLS383 = {

        // BLS383 Modulus 
        // Base Bits= 23
        Modulus: [0x2D556B, 0x556A55, 0x75EAB2, 0x23AFBA, 0x1BB01, 0x2BAEA4, 0x5CC20F, 0x758B67, 0x20F99, 0x640A63, 0x69A3A8, 0x6009AA, 0x2A7852, 0x20B8AA, 0x7DD718, 0x104054, 0x7AC5],
        R2modp: [0x3353B, 0x66C8A7, 0x51A94C, 0x31E097, 0x340361, 0x5EBDB7, 0x3B6484, 0x3C1977, 0x73CD0B, 0x3C91A6, 0x269561, 0x1EC635, 0x182E9D, 0x5C56A2, 0x778340, 0x321B03, 0x5892],
        MConst: 0x23D0BD,
        Fra: [0x34508B, 0x4B3525, 0x4D0CAE, 0x503777, 0x463DB7, 0x3BF78E, 0xD072C, 0x2AE9A0, 0x69D32D, 0x282C73, 0x1730DB, 0xCD9F8, 0x6AB98B, 0x7DC9B0, 0x1CBCC8, 0x7D8CC3, 0x5A5],
        Frb: [0x7904E0, 0xA352F, 0x28DE04, 0x537843, 0x3B7D49, 0x6FB715, 0x4FBAE2, 0x4AA1C7, 0x183C6C, 0x3BDDEF, 0x5272CD, 0x532FB2, 0x3FBEC7, 0x22EEF9, 0x611A4F, 0x12B391, 0x751F],

    };

    return ROM_FIELD_BLS383;
};



ROM_FIELD_BLS461 = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_BLS461 = {

        // BLS461 Modulus 
        // Base Bits= 23
		Modulus: [0x2AAAAB,0x155,0x2AAAB0,0x2AAA55,0x55,0x80004,0x555FC0,0x135548,0x1CC00F,0x3FF4B8,0x2D0AA3,0x58A424,0x2CCA47,0x465B17,0x6F5BC7,0xA49AF,0x55D694,0x34AAB4,0x155535,0x2AAAAA,0x1],
		R2modp: [0x621498,0x3B585F,0x41688,0x6F780D,0x17C239,0x158D8A,0x491A92,0x737DF1,0x22A06,0x460263,0x275FF2,0x5496C3,0x6D4AD2,0x3A7B46,0x3A6323,0x1723B1,0x76204B,0x66FD26,0x4E743E,0x1BE66E,0x0],
		MConst: 0x7FFFFD,
		Fra: [0x12A3A,0x2F7F37,0x3DC4,0x52CCE2,0x1C6308,0xB7F14,0x4381D4,0x52D328,0x58D45F,0x359C90,0x1DC2CC,0x616582,0x7C61EB,0x6B11C5,0x64341C,0x421B30,0x4DFEFA,0x3CABC4,0x12DFDA,0x172028,0x1],
		Frb: [0x298071,0x50821E,0x2A6CEB,0x57DD73,0x639D4C,0x7C80EF,0x11DDEB,0x408220,0x43EBAF,0xA5827,0xF47D7,0x773EA2,0x30685B,0x5B4951,0xB27AA,0x482E7F,0x7D799,0x77FEF0,0x2755A,0x138A82,0x0],

    };

    return ROM_FIELD_BLS461;
};


ROM_FIELD_FP256BN = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_FP256BN = {

        // FP256BN Modulus 

        // Base Bits= 24

		Modulus: [0xD33013,0x2DDBAE,0x82D329,0x12980A,0xDC65FB,0xA49F0C,0x5EEE71,0x46E5F2,0xFCF0CD,0xFFFFFF,0xFFFF],
		R2modp: [0x2F4801,0xF779D1,0x3E7F6E,0xB42A3A,0xC919C9,0xC26C08,0x1BB715,0xCA2ED6,0x54293E,0xE578E,0x78EA],
		MConst: 0x37E5E5,
		Fra: [0x943106,0x328AF,0x8F7476,0x1E3AB2,0xA17151,0x67CF39,0x8DDB08,0x2D1A6E,0x786F35,0x7662CA,0x3D61],
		Frb: [0x3EFF0D,0x2AB2FF,0xF35EB3,0xF45D57,0x3AF4A9,0x3CCFD3,0xD11369,0x19CB83,0x848198,0x899D35,0xC29E],
    };

    return ROM_FIELD_FP256BN;
};

ROM_FIELD_FP512BN = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_FP512BN = {

        // FP512BN Modulus 

        // Base Bits= 23

		Modulus: [0x2DEF33,0x501245,0x1ED3AC,0x7A6323,0x255CE5,0x7C322D,0x2AC8DB,0x4632EF,0x18B8E4,0x3D597D,0x451B3C,0x77A2A,0x3C111B,0x78177C,0x32D4C1,0x5D0EC,0x7F01C6,0x7FF3D8,0x7FFFFF,0x7FFFFF,0x7FFFFF,0x7FFFFF,0x3F],
		R2modp: [0x23E65D,0x575A37,0x411CD0,0x295FB3,0x640669,0x375C69,0x92395,0x738492,0x780D6D,0x1BCD9D,0x417CAA,0x2DC6FB,0x7EACFB,0x327043,0x7F2FC7,0xF268C,0x73D733,0x2147C9,0x2ACCD3,0x32EAF8,0x3B2C1E,0xD46A2,0x30],
		MConst: 0x4C5C05,
		Fra: [0x373AB2,0x2F63E9,0x47D258,0x101576,0x1514F6,0x503C2E,0x34EF61,0x4FB040,0x2CBBB5,0x553D0A,0x63A7E2,0x10341C,0x48CF2E,0x3564D7,0x25BDE4,0x50C529,0x468B4E,0x2D518F,0x6DE46,0x7C84AD,0x1CF5BB,0x5EE355,0x7],
		Frb: [0x76B481,0x20AE5B,0x570154,0x6A4DAC,0x1047EF,0x2BF5FF,0x75D97A,0x7682AE,0x6BFD2E,0x681C72,0x617359,0x77460D,0x7341EC,0x42B2A4,0xD16DD,0x350BC3,0x387677,0x52A249,0x7921B9,0x37B52,0x630A44,0x211CAA,0x38],

    };

    return ROM_FIELD_FP512BN;
};


ROM_FIELD_BN254 = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_BN254 = {

        // BN254 Modulus 

        // Base Bits= 24
        Modulus: [0x13, 0x0, 0x13A700, 0x0, 0x210000, 0x861, 0x800000, 0xBA344D, 0x1, 0x648240, 0x2523],
        R2modp: [0x2F2AA7, 0x537047, 0xF8F174, 0xC3E364, 0xAB8C1C, 0x3C2035, 0x69549, 0x379287, 0x3BE629, 0x75617A, 0x1F47],
        MConst: 0x9435E5,
        Fra: [0x2A6DE9, 0xE6C06F, 0xC2E17D, 0x4D3F77, 0x97492, 0x953F85, 0x50A846, 0xB6499B, 0x2E7C8C, 0x761921, 0x1B37],
        Frb: [0xD5922A, 0x193F90, 0x50C582, 0xB2C088, 0x178B6D, 0x6AC8DC, 0x2F57B9, 0x3EAB2, 0xD18375, 0xEE691E, 0x9EB],

    };

    return ROM_FIELD_BN254;
};

ROM_FIELD_BN254CX = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_BN254CX = {

        // BN254CX Modulus 
        // Base Bits= 24
        Modulus: [0x1B55B3, 0x23EF5C, 0xE1BE66, 0x18093E, 0x3FD6EE, 0x66D324, 0x647A63, 0xB0BDDF, 0x702A0D, 0x8, 0x2400],
        R2modp: [0x8EE63D, 0x721FDE, 0xCC0891, 0x10C28B, 0xD4F5A, 0x4C18FB, 0x9036FA, 0x3F845F, 0xA507E4, 0x78EB29, 0x1587],
        MConst: 0x789E85,
        Fra: [0xC80EA3, 0x83355, 0x215BD9, 0xF173F8, 0x677326, 0x189868, 0x8AACA7, 0xAFE18B, 0x3A0164, 0x82FA6, 0x1359],
        Frb: [0x534710, 0x1BBC06, 0xC0628D, 0x269546, 0xD863C7, 0x4E3ABB, 0xD9CDBC, 0xDC53, 0x3628A9, 0xF7D062, 0x10A6],
    };

    return ROM_FIELD_BN254CX;
};

ROM_FIELD_BRAINPOOL = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_BRAINPOOL = {

        // Brainpool modulus
        // Base Bits= 24
        Modulus: [0x6E5377, 0x481D1F, 0x282013, 0xD52620, 0x3BF623, 0x8D726E, 0x909D83, 0x3E660A, 0xEEA9BC, 0x57DBA1, 0xA9FB],
        R2modp: [0x35B819, 0xB03428, 0xECAF0F, 0x3854A4, 0x4A0ED5, 0x2421EA, 0xAA562C, 0xF9C45, 0xDDAE58, 0x4350FD, 0x52B8],
        MConst: 0xFD89B9,

    };
    return ROM_FIELD_BRAINPOOL;
};

ROM_FIELD_C41417 = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */


    var ROM_FIELD_C41417 = {

        // C41417 modulus
        // Base Bits= 23
        Modulus: [0x7FFFEF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF],
        R2modp: [0x121, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        MConst: 0x11,
    };
    return ROM_FIELD_C41417;
};

ROM_FIELD_GOLDILOCKS = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_GOLDILOCKS = {

        // GOLDILOCKS modulus
        // Base Bits= 23
        Modulus: [0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7DFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FF],
        R2modp: [0x0, 0x4, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xC0000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        MConst: 0x1,
    };
    return ROM_FIELD_GOLDILOCKS;
};

ROM_FIELD_HIFIVE = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_HIFIVE = {

        // HIFIVE modulus
        // Base Bits= 23
        Modulus: [0x7FFFFD, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x3FFF],
        R2modp: [0x240000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        MConst: 0x3,
    };
    return ROM_FIELD_HIFIVE;
};

ROM_FIELD_NIST256 = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_NIST256 = {

        // NIST256 Modulus 
        // Base Bits= 24
        Modulus: [0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0x0, 0x0, 0x0, 0x0, 0x1, 0xFFFF00, 0xFFFF],
        R2modp: [0x30000, 0x0, 0x0, 0xFFFF00, 0xFBFFFF, 0xFFFFFF, 0xFFFFFE, 0xFFFFFF, 0xFDFFFF, 0xFFFFFF, 0x4],
        MConst: 0x1,

    };
    return ROM_FIELD_NIST256;
};

ROM_FIELD_NIST384 = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_NIST384 = {

        // NIST384 modulus
        // Base Bits= 23
        Modulus: [0x7FFFFF, 0x1FF, 0x0, 0x0, 0x7FFFF0, 0x7FDFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0xFFFF],
        R2modp: [0x4000, 0x0, 0x7FFFFE, 0x1FF, 0x80000, 0x0, 0x0, 0x7FC000, 0x3FFFFF, 0x0, 0x200, 0x20000, 0x0, 0x0, 0x0, 0x0, 0x0],
        MConst: 0x1,

    };
    return ROM_FIELD_NIST384;
};

ROM_FIELD_NIST521 = function() {

    /*
    	Licensed to the Apache Software Foundation (ASF) under one
    	or more contributor license agreements.  See the NOTICE file
    	distributed with this work for additional information
    	regarding copyright ownership.  The ASF licenses this file
    	to you under the Apache License, Version 2.0 (the
    	"License"); you may not use this file except in compliance
    	with the License.  You may obtain a copy of the License at
    	
    	http://www.apache.org/licenses/LICENSE-2.0

    	Unless required by applicable law or agreed to in writing,
    	software distributed under the License is distributed on an
    	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, either express or implied.  See the License for the
    	specific language governing permissions and limitations
    	under the License.
    */

    /* Fixed Data in ROM - Field and Curve parameters */

    var ROM_FIELD_NIST521 = {

        // NIST521 modulus
        // Base Bits= 23
        Modulus: [0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFFFF, 0x7FFF],
        R2modp: [0x10000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        MConst: 0x1,
    };
    return ROM_FIELD_NIST521;
};