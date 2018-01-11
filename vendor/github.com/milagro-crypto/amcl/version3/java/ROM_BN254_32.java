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


package org.apache.milagro.amcl.BN254;

public class ROM
{

	public static final int[] Modulus= {0x13,0x0,0x13A7,0x0,0x86121,0x8000000,0x1BA344D,0x4000000,0x5236482,0x2};
	public static final int[] R2modp= {0xF5E7E39,0x2F2A96F,0xB96F13C,0x64E8642,0xC7146,0x9926F7B,0x4DACD24,0x8321E7B,0xD127A2E,0x1};
	public static final int MConst= 0x79435E5;

	public static final int CURVE_A= 0;
	public static final int CURVE_B_I= 2;
	public static final int[] CURVE_B= {0x2,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0};
	public static final int[] CURVE_Order= {0xD,0x0,0x10A1,0x8000000,0x7FF9F,0x8000000,0x1BA344D,0x4000000,0x5236482,0x2};
	public static final int[] CURVE_Gx= {0x12,0x0,0x13A7,0x0,0x86121,0x8000000,0x1BA344D,0x4000000,0x5236482,0x2};
	public static final int[] CURVE_Gy= {0x1,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0};

	public static final int[] CURVE_Bnx= {0x1,0x8000000,0x40,0x0,0x0,0x0,0x0,0x0,0x0,0x0};
	public static final int[] CURVE_Cof= {0x1,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0};
	public static final int[] CURVE_Cru= {0x7,0x8000000,0x6CD,0x0,0x24909,0x4000000,0x49B362,0x0,0x0,0x0};
	public static final int[] Fra= {0xF2A6DE9,0x7DE6C06,0xF77C2E1,0x74924D3,0x53F8509,0x50A8469,0xCB6499B,0x212E7C8,0xB377619,0x1};
	public static final int[] Frb= {0xD5922A,0x82193F9,0x8850C5,0x8B6DB2C,0xAC8DC17,0x2F57B96,0x503EAB2,0x1ED1837,0x9EBEE69,0x0};
	public static final int[] CURVE_Pxa= {0x803FB2B,0xEE4224C,0x8BF0D91,0x8BBB489,0xDB6A464,0x7E8C61E,0xFEB8D8C,0x519EB62,0x61A10BB,0x0};
	public static final int[] CURVE_Pxb= {0x7D54CF3,0x8C34C1E,0x784B70D,0x746BAE3,0xA5B1F4D,0x8C5982A,0x3310AA7,0xBA73783,0x516AAF9,0x0};
	public static final int[] CURVE_Pya= {0x1CD2B9A,0xF0E0789,0xE09BD19,0xAE6BDB,0x22329BD,0x96698C8,0x39A90E0,0x6BAF934,0x21897A0,0x0};
	public static final int[] CURVE_Pyb= {0xB3ACE9B,0x2D1AEC6,0x9C9578A,0x6FFD73,0xD37B090,0x56F5F38,0x68F6D44,0x7C8B152,0xEBB2B0E,0x0};
	public static final int[][] CURVE_W= {{0x3,0x0,0x204,0x8000000,0x6181,0x0,0x0,0x0,0x0,0x0},{0x1,0x0,0x81,0x0,0x0,0x0,0x0,0x0,0x0,0x0}};
	public static final int[][][] CURVE_SB= {{{0x4,0x0,0x285,0x8000000,0x6181,0x0,0x0,0x0,0x0,0x0},{0x1,0x0,0x81,0x0,0x0,0x0,0x0,0x0,0x0,0x0}},{{0x1,0x0,0x81,0x0,0x0,0x0,0x0,0x0,0x0,0x0},{0xA,0x0,0xE9D,0x0,0x79E1E,0x8000000,0x1BA344D,0x4000000,0x5236482,0x2}}};
	public static final int[][] CURVE_WB= {{0x0,0x8000000,0x40,0x8000000,0x2080,0x0,0x0,0x0,0x0,0x0},{0x5,0x8000000,0x54A,0x0,0x1C707,0x8000000,0x312241,0x0,0x0,0x0},{0x3,0x8000000,0x2C5,0x8000000,0xE383,0xC000000,0x189120,0x0,0x0,0x0},{0x1,0x8000000,0xC1,0x8000000,0x2080,0x0,0x0,0x0,0x0,0x0}};
	public static final int[][][] CURVE_BB= {{{0xD,0x8000000,0x1060,0x8000000,0x7FF9F,0x8000000,0x1BA344D,0x4000000,0x5236482,0x2},{0xC,0x8000000,0x1060,0x8000000,0x7FF9F,0x8000000,0x1BA344D,0x4000000,0x5236482,0x2},{0xC,0x8000000,0x1060,0x8000000,0x7FF9F,0x8000000,0x1BA344D,0x4000000,0x5236482,0x2},{0x2,0x0,0x81,0x0,0x0,0x0,0x0,0x0,0x0,0x0}},{{0x1,0x0,0x81,0x0,0x0,0x0,0x0,0x0,0x0,0x0},{0xC,0x8000000,0x1060,0x8000000,0x7FF9F,0x8000000,0x1BA344D,0x4000000,0x5236482,0x2},{0xD,0x8000000,0x1060,0x8000000,0x7FF9F,0x8000000,0x1BA344D,0x4000000,0x5236482,0x2},{0xC,0x8000000,0x1060,0x8000000,0x7FF9F,0x8000000,0x1BA344D,0x4000000,0x5236482,0x2}},{{0x2,0x0,0x81,0x0,0x0,0x0,0x0,0x0,0x0,0x0},{0x1,0x0,0x81,0x0,0x0,0x0,0x0,0x0,0x0,0x0},{0x1,0x0,0x81,0x0,0x0,0x0,0x0,0x0,0x0,0x0},{0x1,0x0,0x81,0x0,0x0,0x0,0x0,0x0,0x0,0x0}},{{0x2,0x8000000,0x40,0x0,0x0,0x0,0x0,0x0,0x0,0x0},{0x2,0x0,0x102,0x0,0x0,0x0,0x0,0x0,0x0,0x0},{0xA,0x0,0x1020,0x8000000,0x7FF9F,0x8000000,0x1BA344D,0x4000000,0x5236482,0x2},{0x2,0x8000000,0x40,0x0,0x0,0x0,0x0,0x0,0x0,0x0}}};

}

