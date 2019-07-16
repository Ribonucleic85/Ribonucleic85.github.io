/*	CP Multipliers											*
 *	  Full Level CPMs were extracted from the Game_Master and are in the 1st and 3rd columns,	*
 *	  and Half Level CPMs were calculated and rounded to 8 decimal places and are in the 2nd	*
 *	  and 4th columns, also a full list of Half Level CPMs to ~100 decimal places will be		*
 *	  included at the bottom of this file								*/
const CPM = [
	0.094,		0.13513743,	0.16639787,	0.19265091,
	0.21573247,	0.23657266,	0.25572005,	0.27353038,
	0.29024988,	0.30605738,	0.3210876,	0.33544503,
	0.34921268,	0.36245775,	0.37523559,	0.38759241,
	0.39956728,	0.41119354,	0.4225,		0.43292641,
	0.44310755,	0.45305996,	0.46279839,	0.47233608,
	0.48168495,	0.49085581,	0.49985844,	0.50870176,
	0.51739395,	0.52594251,	0.53435433,	0.54263576,
	0.55079269,	0.55883060,	0.56675452,	0.57456915,
	0.58227891,	0.58988791,	0.5974,		0.60482366,
	0.61215729,	0.61940412,	0.62656713,	0.63364918,
	0.64065295,	0.64758096,	0.65443563,	0.66121926,
	0.667934,	0.67458190,	0.68116492,	0.68768490,
	0.69414365,	0.70054289,	0.70688421,	0.71316910,
	0.71939909,	0.72557561,	0.7317,		0.73474101,
	0.73776948,	0.74078557,	0.74378943,	0.74678120,
	0.74976104,	0.75272910,	0.75568551,	0.75863037,
	0.76156384,	0.76448607,	0.76739717,	0.77029727,
	0.7731865,	0.77606494,	0.77893275,	0.78179008,
	0.784637,	0.78747359,	0.7903
];


/*	Squared CP Multipliers						*
 *	  As above Full Level ^2 CPMs are in the 1st and 3rd columns,	*
 *	  and Half Level ^2 CPMs are in the 2nd and 4th columns, none	*
 *	  of these are rounded as they fell within the accuracy of	*
 *	  the calculator used, although they were calculated from	*
 *	  rounded CPMs their accuracy should be sufficient		*/
const CPM2 = [
	0.008836,		0.0182621249870049,	0.0276882511405369,	0.0371143731238281,
	0.0465404986123009,	0.0559666234594756,	0.0653927439720025,	0.0748188687829444,
	0.0842449928400144,	0.0936711198524644,	0.10309724687376,	0.1125233681517009,
	0.1219494958727824,	0.1313756205350625,	0.1408017480026481,	0.1502278762896081,
	0.1596540112465984,	0.1690801273377316,	0.17850625,		0.1874252764754881,
	0.1963443008670025,	0.2052633273552016,	0.2141823497865921,	0.2231013724697664,
	0.2320203910565025,	0.2409394262107561,	0.2498584600392336,	0.2587774806270976,
	0.2676964994966025,	0.2766155238251001,	0.2855345499897489,	0.2944535680307776,
	0.3033725873574361,	0.31229163949636,	0.3212106859404304,	0.3301297081317225,
	0.3390487290307881,	0.347967746364168,	0.35688676,		0.3658116596957956,
	0.3747365477001441,	0.3836614638729744,	0.3925863683964369,	0.4015112833146724,
	0.4104362023437025,	0.4193610997545216,	0.4282859938134969,	0.4372109097949476,
	0.446135828356,		0.45506073980761,	0.4639856482386064,	0.47291052168801,
	0.4818354068353225,	0.4907603407295521,	0.4996852863473241,	0.50861016519481,
	0.5175350506928281,	0.5264599658268721,	0.53538489,		0.5398443517758201,
	0.5443038056194704,	0.5487632607202249,	0.5532227161797249,	0.55768216067344,
	0.5621416171018816,	0.56660109798681,	0.5710605900239601,	0.5755200382863369,
	0.5799794823955456,	0.5844389512240449,	0.5888984165240089,	0.5933578841694529,
	0.59781736378225,	0.6022767910972036,	0.6067362290225625,	0.6111957291864064,
	0.615655221769,		0.6201146549474881,	0.62457409
];









/* this commented code is for redundacy */

/*  The half CPM formula (CPM_0_5) also      *
 *  calculates full level CPMs by feeding    *
 *  it half level CPMs if so it can be used  *
 *  to extend the CPM list beyond level 40   */
/*
CPM_0_5
  = ((cpm[Lv]**2 + cmp[Lv+1]**2) / 2)**0.5
  = (cpm[Lv]**2 - cmp[Lv]**2 / 2 + cmp[Lv+1]**2 / 2)**0.5
  = (cmp[Lv]**2 + CPM_step)**0.5

CPM_step
     = (cpm[Lv+1]**2 - cmp[Lv]**2) / 2
*/


/*  CPMs are squared in every usage, so it will      *
 *  be computationally less expensive to pre-square  *
 *  them and that will also simplify the formulas    */
/*
CPM_0_5
  = ((cpm2[Lv] + cmp2[Lv+1]) / 2)**0.5
  = (cpm2[Lv] - cmp2[Lv]/2 + cmp2[Lv+1]/2)**0.5
  = (cmp2[Lv] + CPM_step)**0.5

CPM_step
  = (cpm2[Lv+1] - cmp2[Lv]) / 2
*/


/* ----------------------------------------------------
 * Half Level CPMs (1.5 - 39.5) to ~100 decimal places
0.1351374321580384699593220108434370513134543615435836894554156469516894249773111649970298663221839807
0.1926509145486179621733285199487407498841355998882168865041453867327786607025775162112555832219121186
0.236572655419327150942624244721651416118642854208883699030928895210776993184198770074604520988137055
0.2735303793109797338146700062821120652614489219168880072737285456594535950288488090231544427041651628
0.3060573800072254424970046351777605876103530896404001977433578459136598741312296361109350376856404451
0.3354450348019347267440851338432535978276123648750548281835202527117023880875989360547043559260767898
0.3624577519349189612528475572452257034418878230174122226649622111270217335257635576885395411148247427
0.3875924143022193487882137254859018202775231048808181571497583776070961550739979231304697398821779964
0.4111935439951595348977275891977448981295684916022711891697706841169312509498559343398349681096677492
0.4329264087965774004775708265969256200225447887226549857934959214307307710630397036698095812470213454
0.4530599577614394516223047731330665678256942652653153590640957364558663991893692001948829734274591959
0.4723360778318201896613490864808080649106665283981376418261633266680903649432340558666621933409113373
0.4908558093247629579285767616916208078132727225297730488612154444655575918157649382068766888153650882
0.5087017591555174187787842232096392773118930648732979585494213356147577685586363474478405636865679895
0.5259425108727908295891847264685095591110176254001301575156049211962505444727631051608147108081206069
0.5426357605923079043382354182282860980511842210305726690395786499667546628396098465646992704652004951
0.5588305974523346104431298705314644264827494848844785563323869726844642414128324714432287643694848392
0.5745691494377410879820687517389440833392743823699513464710295128763398787037026517782655298552424007
0.5898879084329446144644136024621310495448284830098131275902914211284409911554250670448046587438821697
0.6048236551674149343348452862360843351084113100075902503397655734767981666649297777547230460234066498
0.6194041152981553286186219476571620420974010847953913010774122742727777145808985058825279374665481167
0.6336491816218732401496417882893041666630671903772695843904684583584257181936543450129901244690465215
0.6475809587060136066427888906789329639128116100744293180471884913126348603202941396142110818562757698
0.6612192609753200844820753805673154033876079726397312122110445908776945772778598026992975762779988692
0.6745818988805608323814024286757333770105726332868874971437313433745437489124335811086273110264436185
0.6876849042526413128418566877873060734325488047594624223664911042254487388720396898672727988479789698
0.7005428941837346907456044821551048968753913988744662427432533616588064453227013620044770283595603517
0.7131691023313307422916226811046577823320260210270871557095740870796543317900697856444616577787468956
0.7255756131144527723996841132049087394554738095753751575226870558480463462346789031501099342420216417
0.7347410073010320280853602322939455101875909129951374526160469401514691554795679967591892476413671211
0.7407855701210692791878641950577756216779347689606355104272421282549282293861803300573588044470264712
0.7467812039953893014693355494918558024373744428736734598098447398618918118298964608469913199929661315
0.752729103703929366010233463544208661339999660094409827782814768229239137984105755473694086802709282
0.758630368631359793918363686321189647108670506993208758450628464417280080885228924610304147450444733
0.7644860688461086993177880050907356808814698347213381283260065199339928789657856228856211028457808532
0.7702972738840047654034311859390579676878765168088602915000041048383589172408797489634263769884374403
0.7760649434180146305263938256942257338630982418416458035784653606926521006056838520933915043864323933
0.7817900775756758413477517991626786150642025040051256277993233581785164015688478261583203217016301675
0.787473590594948142734562506062390383867382863447019393074100540715198026436562132937935807928168859
*/
