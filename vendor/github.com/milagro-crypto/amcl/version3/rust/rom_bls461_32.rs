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

use bls461::big::NLEN;
use arch::Chunk;

// Base Bits= 28
// bls461 Modulus

pub const MODULUS:[Chunk;NLEN]=[0xAAAAAAB,0xAC0000A,0x54AAAAA,0x5555,0x400020,0x91557F0,0xF26AA,0xFA5C1CC,0xB42A8DF,0x7B14848,0x8BACCA4,0x6F1E32D,0x4935FBD,0x55D6941,0xD5A555A,0x5545554,0x1555];
pub const R2MODP:[Chunk;NLEN]=[0xC9B6A33,0x2ECD087,0x3CCB2B1,0xCD461FE,0x8CB5AB2,0xC5B9635,0x5312E92,0xB659F64,0x3B596FA,0x8679006,0xA92E2B3,0x3CE05E3,0x363550F,0x7C07A8E,0x382C083,0x6347FEA,0xBD];
pub const MCONST:Chunk=0xFFFFFFD;
pub const FRA:[Chunk;NLEN]=[0xB812A3A,0x7117BF9,0x99C400F,0xC6308A5,0x5BF8A1,0x510E075,0x45FA5A6,0xCE4858D,0x770B31A,0xBC2CB04,0xE2FC61E,0xD073588,0x4366190,0x4DFEFA8,0x69E55E2,0x504B7F,0x12E4];
pub const FRB:[Chunk;NLEN]=[0xF298071,0x3AE8410,0xBAE6A9B,0x39D4CAF,0xFE4077E,0x404777A,0xBAF8104,0x2C13C3E,0x3D1F5C5,0xBEE7D44,0xA8B0685,0x9EAADA4,0x5CFE2C,0x7D7999,0x6BBFF78,0x50409D5,0x271];

// bls461 Curve
pub const CURVE_A:isize = 0;
pub const CURVE_B_I:isize = 9;
pub const CURVE_B:[Chunk;NLEN]=[0x9,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0];
pub const CURVE_ORDER:[Chunk;NLEN]=[0x1,0x0,0xFFFFC00,0x7FEFFFE,0x110000,0x7FFC800,0x801FC01,0x5FD000E,0x17FE0,0xFFFC018,0xFFFFFF7,0x0,0x0,0x0,0x0,0x0,0x0];
pub const CURVE_GX:[Chunk;NLEN]=[0xADEE93D,0x4D026A8,0x74B7411,0xD9C00EE,0x31AC7F2,0xC3981B5,0x9218229,0xD3564DC,0xA096650,0x6F7C292,0x9743616,0xBE922B1,0x12CF668,0xC81327,0x463B73A,0xE74E99B,0xAD0];
pub const CURVE_GY:[Chunk;NLEN]=[0xAD1D465,0xF763157,0xC4FF470,0x17884C8,0xB8D215D,0xA819E66,0xF4959D0,0xE5C3245,0xB84910A,0xB8BFA40,0xBE96EEC,0x8BF9F8C,0xF277ACC,0x5F1C3F2,0x5F68C9,0xCDB14B3,0x77B];
pub const CURVE_BNX:[Chunk;NLEN]=[0x0,0xFBFFFE0,0x1FFFFF,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0];
pub const CURVE_COF:[Chunk;NLEN]=[0xAAAAAAB,0xA7FFFEA,0x1556AA,0xD55AAAB,0x554FFFF,0x1555,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0];
pub const CURVE_CRU:[Chunk;NLEN]=[0xFFFFFFE,0x40001F,0xFE00000,0xFFE7FFF,0xF0FFF6F,0x7200C47,0x7BCC604,0x15796DB,0xCF47771,0x9875433,0x613F0E8,0x5000502,0xEBFFF60,0x1FFFFF,0x0,0x0,0x0];
pub const CURVE_PXA:[Chunk;NLEN]=[0x6D0A37C,0x5B50318,0x75DCC46,0xC2E492E,0xD6878A9,0xE01F919,0xF92F564,0x86DB74F,0x66803F0,0x46D581A,0x7ED78D,0x2F97C29,0xC270C89,0xF679453,0x6A50A9A,0x54138A0,0x10CC];
pub const CURVE_PXB:[Chunk;NLEN]=[0x2C1C0AD,0xF85CA8C,0x25CADE9,0x6CD66C4,0xA289609,0xC612951,0xEE2401A,0x529ABEB,0xF65B17D,0xBA09D33,0xD4C5AF5,0x4D4371E,0x46A672E,0xA279D22,0xACEA37C,0x1FB4FE5,0x95C];
pub const CURVE_PYA:[Chunk;NLEN]=[0x2FB006,0xCCD0C1B,0xA12A337,0x3D194A4,0xC92C895,0x4960CFC,0x39FC68B,0x3A9B00F,0xED1BA0F,0xA7DBBC5,0xA9CDFD8,0x27CC2F7,0x4E73ED2,0x6070F4F,0xEBA7E67,0xAC848E7,0x226];
pub const CURVE_PYB:[Chunk;NLEN]=[0xDF1457C,0xA506ADF,0x4C20A8,0xD6A31DC,0x36E3FB4,0xEA9A8F1,0x92F5668,0x3C3BE44,0x67A1297,0x74BEABA,0x56A20BE,0x4C42E38,0x45157F0,0x2AB1D00,0xBB402EA,0x101B4FA,0xE38];
pub const CURVE_W:[[Chunk;NLEN];2]=[[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]];
pub const CURVE_SB:[[[Chunk;NLEN];2];2]=[[[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],[[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]]];
pub const CURVE_WB:[[Chunk;NLEN];4]=[[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]];
pub const CURVE_BB:[[[Chunk;NLEN];4];4]=[[[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],[[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],[[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],[[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]]];

pub const USE_GLV:bool = true;
pub const USE_GS_G2:bool = true;
pub const USE_GS_GT:bool = true;
pub const GT_STRONG:bool = false;
