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

use bn254CX::big::NLEN;
use arch::Chunk;

// Base Bits= 28
// bn254CX Modulus 
pub const MODULUS:[Chunk;NLEN]=[0xC1B55B3,0x6623EF5,0x93EE1BE,0xD6EE180,0x6D3243F,0x647A636,0xDB0BDDF,0x8702A0,0x4000000,0x2];
pub const R2MODP:[Chunk;NLEN]=[0x8A0800A,0x466A061,0x43056A3,0x2B3A225,0x9C6600,0x148515B,0x6BDF50,0xEC9EA56,0xC992E66,0x1];
pub const MCONST:Chunk=0x9789E85;
pub const FRA:[Chunk;NLEN]=[0x5C80EA3,0xD908335,0x3F8215B,0x7326F17,0x8986867,0x8AACA71,0x4AFE18B,0xA63A016,0x359082F,0x1];
pub const FRB:[Chunk;NLEN]=[0x6534710,0x8D1BBC0,0x546C062,0x63C7269,0xE3ABBD8,0xD9CDBC4,0x900DC53,0x623628A,0xA6F7D0,0x1];

// bn254CX Curve 
pub const CURVE_A:isize = 0;
pub const CURVE_B_I:isize = 2;
pub const CURVE_B:[Chunk;NLEN]=[0x2,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0];
pub const CURVE_ORDER:[Chunk;NLEN]=[0x6EB1F6D,0x11C0A63,0x906CEBE,0xD6EE0CC,0x6D2C43F,0x647A636,0xDB0BDDF,0x8702A0,0x4000000,0x2];
pub const CURVE_GX:[Chunk;NLEN]=[0xC1B55B2,0x6623EF5,0x93EE1BE,0xD6EE180,0x6D3243F,0x647A636,0xDB0BDDF,0x8702A0,0x4000000,0x2];
pub const CURVE_GY:[Chunk;NLEN]=[0x1,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0];
pub const CURVE_BNX:[Chunk;NLEN]=[0x3C012B1,0x0,0x40,0x0,0x0,0x0,0x0,0x0,0x0,0x0];
pub const CURVE_COF:[Chunk;NLEN]=[0x1,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0];
pub const CURVE_CRU:[Chunk;NLEN]=[0x4235C97,0xE093179,0xF875631,0xDF6471E,0xF1440BD,0xCA83,0x480000,0x0,0x0,0x0];

pub const CURVE_PXA:[Chunk;NLEN]=[0x4D2EC74,0x851CEEE,0xE2726C0,0x85BFA03,0xBBB907C,0xF5C34,0x6358B25,0x7053B25,0x9682D2C,0x1];
pub const CURVE_PXB:[Chunk;NLEN]=[0xE29CFE1,0xA58E8B2,0x9C30F47,0x97B0C20,0x743F81B,0x37A8E99,0xAA011C9,0x3E19F64,0x466B9EC,0x1];
pub const CURVE_PYA:[Chunk;NLEN]=[0xF0BE09F,0xFBFCEBC,0xEC1B30C,0xB33D847,0x2096361,0x157DAEE,0xDD81E22,0x72332B8,0xA79EDD9,0x0];
pub const CURVE_PYB:[Chunk;NLEN]=[0x898EE9D,0x904B228,0x2EDEBED,0x4EA569D,0x461C286,0x512D8D3,0x35C6E4,0xECC4C09,0x6160C39,0x0];

pub const CURVE_W:[[Chunk;NLEN];2]=[[0x62FEB83,0x5463491,0x381200,0xB4,0x6000,0x0,0x0,0x0,0x0,0x0],[0x7802561,0x0,0x80,0x0,0x0,0x0,0x0,0x0,0x0,0x0]];
pub const CURVE_SB:[[[Chunk;NLEN];2];2]=[[[0xDB010E4,0x5463491,0x381280,0xB4,0x6000,0x0,0x0,0x0,0x0,0x0],[0x7802561,0x0,0x80,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],[[0x7802561,0x0,0x80,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0xBB33EA,0xBD5D5D2,0x8CEBCBD,0xD6EE018,0x6D2643F,0x647A636,0xDB0BDDF,0x8702A0,0x4000000,0x2]]];
pub const CURVE_WB:[[Chunk;NLEN];4]=[[0x67A84B0,0x1C21185,0x12B040,0x3C,0x2000,0x0,0x0,0x0,0x0,0x0],[0xE220475,0xCDF995B,0xA7F9A36,0x94EDA8C,0xA0DC07E,0x8702,0x300000,0x0,0x0,0x0],[0xF10B93,0x66FCCAE,0x53FCD3B,0x4A76D46,0x506E03F,0x4381,0x180000,0x0,0x0,0x0],[0xDFAAA11,0x1C21185,0x12B0C0,0x3C,0x2000,0x0,0x0,0x0,0x0,0x0]];
pub const CURVE_BB:[[[Chunk;NLEN];4];4]=[[[0x32B0CBD,0x11C0A63,0x906CE7E,0xD6EE0CC,0x6D2C43F,0x647A636,0xDB0BDDF,0x8702A0,0x4000000,0x2],[0x32B0CBC,0x11C0A63,0x906CE7E,0xD6EE0CC,0x6D2C43F,0x647A636,0xDB0BDDF,0x8702A0,0x4000000,0x2],[0x32B0CBC,0x11C0A63,0x906CE7E,0xD6EE0CC,0x6D2C43F,0x647A636,0xDB0BDDF,0x8702A0,0x4000000,0x2],[0x7802562,0x0,0x80,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],[[0x7802561,0x0,0x80,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x32B0CBC,0x11C0A63,0x906CE7E,0xD6EE0CC,0x6D2C43F,0x647A636,0xDB0BDDF,0x8702A0,0x4000000,0x2],[0x32B0CBD,0x11C0A63,0x906CE7E,0xD6EE0CC,0x6D2C43F,0x647A636,0xDB0BDDF,0x8702A0,0x4000000,0x2],[0x32B0CBC,0x11C0A63,0x906CE7E,0xD6EE0CC,0x6D2C43F,0x647A636,0xDB0BDDF,0x8702A0,0x4000000,0x2]],[[0x7802562,0x0,0x80,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x7802561,0x0,0x80,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x7802561,0x0,0x80,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x7802561,0x0,0x80,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],[[0x3C012B2,0x0,0x40,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0xF004AC2,0x0,0x100,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0xF6AFA0A,0x11C0A62,0x906CE3E,0xD6EE0CC,0x6D2C43F,0x647A636,0xDB0BDDF,0x8702A0,0x4000000,0x2],[0x3C012B2,0x0,0x40,0x0,0x0,0x0,0x0,0x0,0x0,0x0]]];

pub const USE_GLV:bool = true;
pub const USE_GS_G2:bool = true;
pub const USE_GS_GT:bool = true;
pub const GT_STRONG:bool = true;
