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

use fp256bn::big::NLEN;
use arch::Chunk;


// Base Bits= 28
pub const MODULUS:[Chunk;NLEN]=[0xED33013,0x292DDBA,0x80A82D3,0x65FB129,0x49F0CDC,0x5EEE71A,0xD46E5F2,0xFFFCF0C,0xFFFFFFF,0xF];
pub const R2MODP:[Chunk;NLEN]=[0x3B9F8B,0xEDE3363,0xFEC54E8,0x92FFEE9,0x3C55F79,0x13C1C06,0xC0123FA,0xA12F2EA,0xE559B2A,0x8];
pub const MCONST:Chunk=0x537E5E5;

pub const CURVE_A:isize = 0;
pub const CURVE_B_I:isize = 3;
pub const CURVE_B:[Chunk;NLEN]=[0x3,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0];
pub const CURVE_ORDER:[Chunk;NLEN]=[0x10B500D,0x2D536CD,0x9921AF6,0x65FB129,0x49E0CDC,0x5EEE71A,0xD46E5F2,0xFFFCF0C,0xFFFFFFF,0xF];
pub const CURVE_GX:[Chunk;NLEN]=[0x1,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0];
pub const CURVE_GY:[Chunk;NLEN]=[0x2,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0];

pub const FRA:[Chunk;NLEN]=[0xF943106,0x760328A,0xAB28F74,0x71511E3,0x7CF39A1,0x8DDB086,0x52D1A6E,0xCA786F3,0xD617662,0x3];
pub const FRB:[Chunk;NLEN]=[0xF3EFF0D,0xB32AB2F,0xD57F35E,0xF4A9F45,0xCCFD33A,0xD113693,0x819CB83,0x3584819,0x29E899D,0xC];
pub const CURVE_BNX:[Chunk;NLEN]=[0xB0A801,0x82F5C03,0x68,0x0,0x0,0x0,0x0,0x0,0x0,0x0];
pub const CURVE_COF:[Chunk;NLEN]=[0x1,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0];
pub const CURVE_CRU:[Chunk;NLEN]=[0x3A1B807,0x1C0A24A,0x32D1EDB,0xD79DF19,0x8659BCD,0x4092101,0x13988E1,0x0,0x0,0x0];
pub const CURVE_PXA:[Chunk;NLEN]=[0x9C09EFB,0x2616B68,0xF843CD2,0x539A12B,0x13ACE1C,0x577C289,0x28560F,0xB4C96C2,0xE0C3350,0xF];
pub const CURVE_PXB:[Chunk;NLEN]=[0x37E6A2B,0x69ED34A,0x3589D2,0x78E287D,0x3B924DD,0xC637D81,0x4DB5AE1,0x738AC05,0xEA66057,0x4];
pub const CURVE_PYA:[Chunk;NLEN]=[0xEDC27FF,0x9B481B,0x15848E9,0x24758D6,0xE51EFCB,0x75124E3,0x376770D,0xC542A3B,0x2046E7,0x7];
pub const CURVE_PYB:[Chunk;NLEN]=[0xAAD049B,0x1281114,0xA98B3E0,0xBE80821,0x29F8B4C,0x49297EB,0x42EEA6,0xD388C29,0x554E3BC,0x0];
pub const CURVE_W:[[Chunk;NLEN];2]=[[0xB054003,0xF0036E1,0xE78663A,0xFFFFFFF,0xFFFF,0x0,0x0,0x0,0x0,0x0],[0x1615001,0x5EB806,0xD1,0x0,0x0,0x0,0x0,0x0,0x0,0x0]];
pub const CURVE_SB:[[[Chunk;NLEN];2];2]=[[[0xC669004,0xF5EEEE7,0xE78670B,0xFFFFFFF,0xFFFF,0x0,0x0,0x0,0x0,0x0],[0x1615001,0x5EB806,0xD1,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],[[0x1615001,0x5EB806,0xD1,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x606100A,0x3D4FFEB,0xB19B4BB,0x65FB129,0x49D0CDC,0x5EEE71A,0xD46E5F2,0xFFFCF0C,0xFFFFFFF,0xF]]];
pub const CURVE_WB:[[Chunk;NLEN];4]=[[0xD30A800,0x20678F0,0x4D2CC10,0x5555555,0x5555,0x0,0x0,0x0,0x0,0x0],[0xD7DC805,0xD6764C0,0xBC3AD1A,0x8FBEA10,0x4467DE,0x8061601,0xD105EB,0x0,0x0,0x0],[0xF173803,0xACB6061,0x5E1D6C1,0x47DF508,0x82233EF,0xC030B00,0x6882F5,0x0,0x0,0x0],[0xE91F801,0x26530F6,0x4D2CCE1,0x5555555,0x5555,0x0,0x0,0x0,0x0,0x0]];
pub const CURVE_BB:[[[Chunk;NLEN];4];4]=[[[0x5AA80D,0xAA5DACA,0x9921A8D,0x65FB129,0x49E0CDC,0x5EEE71A,0xD46E5F2,0xFFFCF0C,0xFFFFFFF,0xF],[0x5AA80C,0xAA5DACA,0x9921A8D,0x65FB129,0x49E0CDC,0x5EEE71A,0xD46E5F2,0xFFFCF0C,0xFFFFFFF,0xF],[0x5AA80C,0xAA5DACA,0x9921A8D,0x65FB129,0x49E0CDC,0x5EEE71A,0xD46E5F2,0xFFFCF0C,0xFFFFFFF,0xF],[0x1615002,0x5EB806,0xD1,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],[[0x1615001,0x5EB806,0xD1,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x5AA80C,0xAA5DACA,0x9921A8D,0x65FB129,0x49E0CDC,0x5EEE71A,0xD46E5F2,0xFFFCF0C,0xFFFFFFF,0xF],[0x5AA80D,0xAA5DACA,0x9921A8D,0x65FB129,0x49E0CDC,0x5EEE71A,0xD46E5F2,0xFFFCF0C,0xFFFFFFF,0xF],[0x5AA80C,0xAA5DACA,0x9921A8D,0x65FB129,0x49E0CDC,0x5EEE71A,0xD46E5F2,0xFFFCF0C,0xFFFFFFF,0xF]],[[0x1615002,0x5EB806,0xD1,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x1615001,0x5EB806,0xD1,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x1615001,0x5EB806,0xD1,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x1615001,0x5EB806,0xD1,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],[[0xB0A802,0x82F5C03,0x68,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x2C2A002,0xBD700C,0x1A2,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0xFAA000A,0x2767EC6,0x9921A25,0x65FB129,0x49E0CDC,0x5EEE71A,0xD46E5F2,0xFFFCF0C,0xFFFFFFF,0xF],[0xB0A802,0x82F5C03,0x68,0x0,0x0,0x0,0x0,0x0,0x0,0x0]]];

pub const USE_GLV:bool = true;
pub const USE_GS_G2:bool = true;
pub const USE_GS_GT:bool = true;
pub const GT_STRONG:bool = false;
