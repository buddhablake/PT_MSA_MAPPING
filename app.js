const tim = [
  {
    MSA: "Bakersfield CA MSA",
    zipCodes: [
      93203, 93205, 93206, 93215, 93216, 93220, 93222, 93224, 93225, 93226,
      93238, 93240, 93241, 93243, 93249, 93250, 93251, 93252, 93255, 93263,
      93268, 93276, 93280, 93283, 93285, 93287, 93301, 93302, 93303, 93304,
      93305, 93306, 93307, 93308, 93309, 93311, 93312, 93313, 93314, 93380,
      93381, 93382, 93383, 93384, 93385, 93386, 93387, 93388, 93389, 93390,
      93501, 93502, 93504, 93505, 93516, 93518, 93519, 93523, 93524, 93527,
      93528, 93531, 93554, 93555, 93556, 93560, 93561, 93581, 93596,
    ],
  },
  {
    MSA: "Fresno CA MSA",
    zipCodes: [
      93210, 93234, 93242, 93602, 93605, 93606, 93607, 93608, 93609, 93611,
      93612, 93613, 93616, 93619, 93621, 93622, 93624, 93625, 93626, 93627,
      93628, 93630, 93631, 93634, 93640, 93641, 93642, 93646, 93648, 93649,
      93650, 93651, 93652, 93654, 93656, 93657, 93660, 93662, 93664, 93667,
      93668, 93675, 93701, 93702, 93703, 93704, 93705, 93706, 93707, 93708,
      93709, 93710, 93711, 93712, 93714, 93715, 93716, 93717, 93718, 93720,
      93721, 93722, 93723, 93724, 93725, 93726, 93727, 93728, 93729, 93730,
      93737, 93740, 93741, 93744, 93745, 93747, 93750, 93755, 93759, 93760,
      93761, 93762, 93764, 93765, 93771, 93772, 93773, 93774, 93775, 93776,
      93777, 93778, 93779, 93780, 93784, 93786, 93790, 93791, 93792, 93793,
      93794, 93844, 93888,
    ],
  },
  {
    MSA: "Las Vegas-Paradise NV MSA",
    zipCodes: [
      88901, 88905, 89002, 89004, 89005, 89006, 89007, 89009, 89011, 89012,
      89014, 89015, 89016, 89018, 89019, 89021, 89024, 89025, 89026, 89027,
      89028, 89029, 89030, 89031, 89032, 89033, 89034, 89036, 89037, 89039,
      89040, 89044, 89046, 89052, 89053, 89054, 89067, 89070, 89074, 89077,
      89081, 89084, 89085, 89086, 89087, 89101, 89102, 89103, 89104, 89105,
      89106, 89107, 89108, 89109, 89110, 89111, 89112, 89113, 89114, 89115,
      89116, 89117, 89118, 89119, 89120, 89121, 89122, 89123, 89124, 89125,
      89126, 89127, 89128, 89129, 89130, 89131, 89132, 89133, 89134, 89135,
      89136, 89137, 89138, 89139, 89140, 89141, 89142, 89143, 89144, 89145,
      89146, 89147, 89148, 89149, 89150, 89151, 89152, 89153, 89154, 89155,
      89156, 89157, 89158, 89159, 89160, 89161, 89162, 89163, 89164, 89165,
      89166, 89169, 89170, 89173, 89177, 89178, 89179, 89180, 89183, 89185,
      89191, 89193, 89195, 89199,
    ],
  },
  {
    MSA: "Los Angeles-Long Beach-Santa Ana CA MSA",
    zipCodes: [
      90001, 90002, 90003, 90004, 90005, 90006, 90007, 90008, 90009, 90010,
      90011, 90012, 90013, 90014, 90015, 90016, 90017, 90018, 90019, 90020,
      90021, 90022, 90023, 90024, 90025, 90026, 90027, 90028, 90029, 90030,
      90031, 90032, 90033, 90034, 90035, 90036, 90037, 90038, 90039, 90040,
      90041, 90042, 90043, 90044, 90045, 90046, 90047, 90048, 90049, 90050,
      90051, 90052, 90053, 90054, 90055, 90056, 90057, 90058, 90059, 90060,
      90061, 90062, 90063, 90064, 90065, 90066, 90067, 90068, 90069, 90070,
      90071, 90072, 90073, 90074, 90075, 90076, 90077, 90078, 90079, 90080,
      90081, 90082, 90083, 90084, 90086, 90087, 90088, 90089, 90090, 90091,
      90093, 90094, 90095, 90096, 90097, 90099, 90101, 90102, 90103, 90174,
      90185, 90189, 90201, 90202, 90209, 90210, 90211, 90212, 90213, 90220,
      90221, 90222, 90223, 90224, 90230, 90231, 90232, 90233, 90239, 90240,
      90241, 90242, 90245, 90247, 90248, 90249, 90250, 90251, 90254, 90255,
      90260, 90261, 90262, 90263, 90264, 90265, 90266, 90267, 90270, 90272,
      90274, 90275, 90277, 90278, 90280, 90290, 90291, 90292, 90293, 90294,
      90295, 90296, 90301, 90302, 90303, 90304, 90305, 90306, 90307, 90308,
      90309, 90310, 90311, 90312, 90313, 90316, 90397, 90398, 90401, 90402,
      90403, 90404, 90405, 90406, 90407, 90408, 90409, 90410, 90411, 90501,
      90502, 90503, 90504, 90505, 90506, 90507, 90508, 90509, 90510, 90601,
      90602, 90603, 90604, 90605, 90606, 90607, 90608, 90609, 90610, 90612,
      90620, 90621, 90622, 90623, 90624, 90630, 90631, 90632, 90633, 90637,
      90638, 90639, 90640, 90650, 90651, 90652, 90659, 90660, 90661, 90662,
      90665, 90670, 90671, 90680, 90701, 90702, 90703, 90704, 90706, 90707,
      90710, 90711, 90712, 90713, 90714, 90715, 90716, 90717, 90720, 90721,
      90723, 90731, 90732, 90733, 90734, 90740, 90742, 90743, 90744, 90745,
      90746, 90747, 90748, 90749, 90755, 90801, 90802, 90803, 90804, 90805,
      90806, 90807, 90808, 90809, 90810, 90813, 90814, 90815, 90822, 90831,
      90832, 90833, 90834, 90835, 90840, 90842, 90844, 90845, 90846, 90847,
      90848, 90853, 90888, 90895, 90899, 91001, 91003, 91006, 91007, 91008,
      91009, 91010, 91011, 91012, 91016, 91017, 91020, 91021, 91023, 91024,
      91025, 91030, 91031, 91040, 91041, 91042, 91043, 91046, 91050, 91051,
      91066, 91077, 91101, 91102, 91103, 91104, 91105, 91106, 91107, 91108,
      91109, 91110, 91114, 91115, 91116, 91117, 91118, 91121, 91123, 91124,
      91125, 91126, 91129, 91131, 91175, 91182, 91184, 91185, 91186, 91187,
      91188, 91189, 91191, 91199, 91201, 91202, 91203, 91204, 91205, 91206,
      91207, 91208, 91209, 91210, 91214, 91221, 91222, 91224, 91225, 91226,
      91301, 91302, 91303, 91304, 91305, 91306, 91307, 91308, 91309, 91310,
      91311, 91312, 91313, 91316, 91321, 91322, 91324, 91325, 91326, 91327,
      91328, 91329, 91330, 91331, 91333, 91334, 91335, 91337, 91340, 91341,
      91342, 91343, 91344, 91345, 91346, 91350, 91351, 91352, 91353, 91354,
      91355, 91356, 91357, 91363, 91364, 91365, 91367, 91371, 91372, 91376,
      91380, 91381, 91382, 91383, 91384, 91385, 91386, 91387, 91388, 91390,
      91392, 91393, 91394, 91395, 91396, 91399, 91401, 91402, 91403, 91404,
      91405, 91406, 91407, 91408, 91409, 91410, 91411, 91412, 91413, 91416,
      91423, 91426, 91436, 91470, 91482, 91495, 91496, 91497, 91499, 91501,
      91502, 91503, 91504, 91505, 91506, 91507, 91508, 91510, 91521, 91522,
      91523, 91526, 91601, 91602, 91603, 91604, 91605, 91606, 91607, 91608,
      91609, 91610, 91611, 91612, 91614, 91615, 91616, 91617, 91618, 91702,
      91706, 91711, 91714, 91715, 91716, 91722, 91723, 91724, 91731, 91732,
      91733, 91734, 91735, 91740, 91741, 91744, 91745, 91746, 91747, 91748,
      91749, 91750, 91754, 91755, 91756, 91759, 91765, 91766, 91767, 91768,
      91769, 91770, 91771, 91772, 91773, 91775, 91776, 91778, 91780, 91788,
      91789, 91790, 91791, 91792, 91793, 91795, 91797, 91799, 91801, 91802,
      91803, 91804, 91841, 91896, 91899, 92602, 92603, 92604, 92605, 92606,
      92607, 92609, 92610, 92612, 92614, 92615, 92616, 92617, 92618, 92619,
      92620, 92623, 92624, 92625, 92626, 92627, 92628, 92629, 92630, 92637,
      92646, 92647, 92648, 92649, 92650, 92651, 92652, 92653, 92654, 92655,
      92656, 92657, 92658, 92659, 92660, 92661, 92662, 92663, 92672, 92673,
      92674, 92675, 92676, 92677, 92678, 92679, 92683, 92684, 92685, 92688,
      92690, 92691, 92692, 92693, 92694, 92697, 92698, 92701, 92702, 92703,
      92704, 92705, 92706, 92707, 92708, 92709, 92710, 92711, 92712, 92725,
      92728, 92735, 92780, 92781, 92782, 92799, 92801, 92802, 92803, 92804,
      92805, 92806, 92807, 92808, 92809, 92811, 92812, 92814, 92815, 92816,
      92817, 92821, 92822, 92823, 92825, 92831, 92832, 92833, 92834, 92835,
      92836, 92837, 92838, 92840, 92841, 92842, 92843, 92844, 92845, 92846,
      92850, 92856, 92857, 92859, 92861, 92862, 92863, 92864, 92865, 92866,
      92867, 92868, 92869, 92870, 92871, 92885, 92886, 92887, 92899, 93510,
      93532, 93534, 93535, 93536, 93539, 93543, 93544, 93550, 93551, 93552,
      93553, 93563, 93584, 93586, 93590, 93591, 93599,
    ],
  },
  {
    MSA: "Modesto CA MSA",
    zipCodes: [
      95307, 95313, 95316, 95319, 95323, 95326, 95328, 95329, 95350, 95351,
      95352, 95353, 95354, 95355, 95356, 95357, 95358, 95360, 95361, 95363,
      95367, 95368, 95380, 95381, 95382, 95386, 95387, 95390, 95397,
    ],
  },
  {
    MSA: "Oxnard-Thousand Oaks-Ventura CA MSA",
    zipCodes: [
      91319, 91320, 91358, 91359, 91360, 91361, 91362, 91377, 93001, 93002,
      93003, 93004, 93005, 93006, 93007, 93009, 93010, 93011, 93012, 93015,
      93016, 93020, 93021, 93022, 93023, 93024, 93030, 93031, 93032, 93033,
      93034, 93035, 93036, 93040, 93041, 93042, 93043, 93044, 93060, 93061,
      93062, 93063, 93064, 93065, 93066, 93093, 93094, 93099,
    ],
  },
  {
    MSA: "Riverside-San Bernardino-Ontario CA MSA",
    zipCodes: [
      91701, 91708, 91709, 91710, 91718, 91729, 91730, 91737, 91739, 91743,
      91752, 91758, 91761, 91762, 91763, 91764, 91784, 91785, 91786, 91798,
      92201, 92202, 92203, 92210, 92211, 92220, 92223, 92225, 92226, 92230,
      92234, 92235, 92236, 92239, 92240, 92241, 92242, 92247, 92248, 92252,
      92253, 92254, 92255, 92256, 92258, 92260, 92261, 92262, 92263, 92264,
      92267, 92268, 92270, 92274, 92276, 92277, 92278, 92280, 92282, 92284,
      92285, 92286, 92292, 92301, 92304, 92305, 92307, 92308, 92309, 92310,
      92311, 92312, 92313, 92314, 92315, 92316, 92317, 92318, 92320, 92321,
      92322, 92323, 92324, 92325, 92326, 92327, 92329, 92331, 92332, 92333,
      92334, 92335, 92336, 92337, 92338, 92339, 92340, 92341, 92342, 92344,
      92345, 92346, 92347, 92350, 92352, 92354, 92356, 92357, 92358, 92359,
      92363, 92364, 92365, 92366, 92368, 92369, 92371, 92372, 92373, 92374,
      92375, 92376, 92377, 92378, 92382, 92385, 92386, 92391, 92392, 92393,
      92394, 92395, 92397, 92398, 92399, 92401, 92402, 92403, 92404, 92405,
      92406, 92407, 92408, 92410, 92411, 92412, 92413, 92414, 92415, 92418,
      92420, 92423, 92424, 92427, 92501, 92502, 92503, 92504, 92505, 92506,
      92507, 92508, 92509, 92513, 92514, 92515, 92516, 92517, 92518, 92519,
      92521, 92522, 92530, 92531, 92532, 92536, 92539, 92543, 92544, 92545,
      92546, 92548, 92549, 92551, 92552, 92553, 92554, 92555, 92556, 92557,
      92561, 92562, 92563, 92564, 92567, 92570, 92571, 92572, 92581, 92582,
      92583, 92584, 92585, 92586, 92587, 92589, 92590, 92591, 92592, 92593,
      92595, 92596, 92599, 92860, 92877, 92878, 92879, 92880, 92881, 92882,
      92883, 93558, 93562, 93592,
    ],
  },
  {
    MSA: "Sacramento-Arden-Arcade-Roseville CA MSA",
    zipCodes: [
      94203, 94204, 94205, 94206, 94207, 94208, 94209, 94211, 94229, 94230,
      94232, 94234, 94235, 94236, 94237, 94239, 94240, 94243, 94244, 94245,
      94246, 94247, 94248, 94249, 94250, 94252, 94253, 94254, 94256, 94257,
      94258, 94259, 94261, 94262, 94263, 94267, 94268, 94269, 94271, 94273,
      94274, 94277, 94278, 94279, 94280, 94282, 94283, 94284, 94285, 94286,
      94287, 94288, 94289, 94290, 94291, 94293, 94294, 94295, 94296, 94297,
      94298, 94299, 95602, 95603, 95604, 95605, 95606, 95607, 95608, 95609,
      95610, 95611, 95612, 95613, 95614, 95615, 95616, 95617, 95618, 95619,
      95621, 95623, 95624, 95626, 95627, 95628, 95630, 95631, 95632, 95633,
      95634, 95635, 95636, 95637, 95638, 95639, 95641, 95645, 95648, 95650,
      95651, 95652, 95653, 95655, 95656, 95658, 95660, 95661, 95662, 95663,
      95664, 95667, 95670, 95671, 95672, 95673, 95677, 95678, 95679, 95680,
      95681, 95682, 95683, 95684, 95690, 95691, 95693, 95694, 95695, 95697,
      95698, 95701, 95703, 95709, 95713, 95714, 95715, 95717, 95720, 95721,
      95722, 95726, 95735, 95736, 95741, 95742, 95743, 95746, 95747, 95757,
      95758, 95759, 95762, 95763, 95765, 95776, 95798, 95799, 95811, 95812,
      95813, 95814, 95815, 95816, 95817, 95818, 95819, 95820, 95821, 95822,
      95823, 95824, 95825, 95826, 95827, 95828, 95829, 95830, 95831, 95832,
      95833, 95834, 95835, 95836, 95837, 95838, 95840, 95841, 95842, 95843,
      95851, 95852, 95853, 95857, 95860, 95864, 95865, 95866, 95867, 95873,
      95887, 95894, 95899, 95937, 96140, 96141, 96142, 96143, 96145, 96146,
      96148, 96150, 96151, 96152, 96154, 96155, 96156, 96157, 96158,
    ],
  },
  {
    MSA: "Salinas CA MSA",
    zipCodes: [
      93426, 93450, 93901, 93902, 93905, 93906, 93907, 93908, 93912, 93915,
      93920, 93921, 93922, 93923, 93924, 93925, 93926, 93927, 93928, 93930,
      93932, 93933, 93940, 93942, 93943, 93944, 93950, 93953, 93954, 93955,
      93960, 93962, 95004, 95012, 95039,
    ],
  },
  {
    MSA: "San Diego-Carlsbad-San Marcos CA MSA",
    zipCodes: [
      91901, 91902, 91903, 91905, 91906, 91908, 91909, 91910, 91911, 91912,
      91913, 91914, 91915, 91916, 91917, 91921, 91931, 91932, 91933, 91934,
      91935, 91941, 91942, 91943, 91944, 91945, 91946, 91947, 91948, 91950,
      91951, 91962, 91963, 91976, 91977, 91978, 91979, 91980, 91987, 91990,
      92003, 92004, 92007, 92008, 92009, 92010, 92011, 92013, 92014, 92018,
      92019, 92020, 92021, 92022, 92023, 92024, 92025, 92026, 92027, 92028,
      92029, 92030, 92033, 92036, 92037, 92038, 92039, 92040, 92046, 92049,
      92051, 92052, 92054, 92055, 92056, 92057, 92058, 92059, 92060, 92061,
      92064, 92065, 92066, 92067, 92068, 92069, 92070, 92071, 92072, 92074,
      92075, 92078, 92079, 92081, 92082, 92083, 92084, 92085, 92086, 92088,
      92090, 92091, 92092, 92093, 92096, 92101, 92102, 92103, 92104, 92105,
      92106, 92107, 92108, 92109, 92110, 92111, 92112, 92113, 92114, 92115,
      92116, 92117, 92118, 92119, 92120, 92121, 92122, 92123, 92124, 92126,
      92127, 92128, 92129, 92130, 92131, 92132, 92133, 92134, 92135, 92136,
      92137, 92138, 92139, 92140, 92142, 92143, 92145, 92147, 92149, 92150,
      92152, 92153, 92154, 92155, 92158, 92159, 92160, 92161, 92162, 92163,
      92164, 92165, 92166, 92167, 92168, 92169, 92170, 92171, 92172, 92173,
      92174, 92175, 92176, 92177, 92178, 92179, 92182, 92184, 92186, 92187,
      92190, 92191, 92192, 92193, 92194, 92195, 92196, 92197, 92198, 92199,
    ],
  },
  {
    MSA: "San Francisco-Oakland-Fremont CA MSA",
    zipCodes: [
      94002, 94003, 94005, 94010, 94011, 94012, 94013, 94014, 94015, 94016,
      94017, 94018, 94019, 94020, 94021, 94025, 94026, 94027, 94028, 94029,
      94030, 94031, 94037, 94038, 94044, 94045, 94059, 94060, 94061, 94062,
      94063, 94064, 94065, 94066, 94067, 94070, 94071, 94074, 94080, 94083,
      94096, 94098, 94099, 94101, 94102, 94103, 94104, 94105, 94106, 94107,
      94108, 94109, 94110, 94111, 94112, 94114, 94115, 94116, 94117, 94118,
      94119, 94120, 94121, 94122, 94123, 94124, 94125, 94126, 94127, 94128,
      94129, 94130, 94131, 94132, 94133, 94134, 94135, 94136, 94137, 94138,
      94139, 94140, 94141, 94142, 94143, 94144, 94145, 94146, 94147, 94150,
      94151, 94152, 94153, 94154, 94155, 94156, 94157, 94158, 94159, 94160,
      94161, 94162, 94163, 94164, 94165, 94166, 94167, 94168, 94169, 94170,
      94171, 94172, 94175, 94177, 94188, 94199, 94303, 94307, 94308, 94401,
      94402, 94403, 94404, 94405, 94406, 94407, 94408, 94409, 94497, 94501,
      94502, 94505, 94506, 94507, 94509, 94511, 94513, 94514, 94516, 94517,
      94518, 94519, 94520, 94521, 94522, 94523, 94524, 94525, 94526, 94527,
      94528, 94529, 94530, 94531, 94536, 94537, 94538, 94539, 94540, 94541,
      94542, 94543, 94544, 94545, 94546, 94547, 94548, 94549, 94550, 94551,
      94552, 94553, 94555, 94556, 94557, 94560, 94561, 94563, 94564, 94565,
      94566, 94568, 94569, 94570, 94572, 94575, 94577, 94578, 94579, 94580,
      94582, 94583, 94586, 94587, 94588, 94595, 94596, 94597, 94598, 94601,
      94602, 94603, 94604, 94605, 94606, 94607, 94608, 94609, 94610, 94611,
      94612, 94613, 94614, 94615, 94617, 94618, 94619, 94620, 94621, 94622,
      94623, 94624, 94625, 94626, 94627, 94643, 94649, 94659, 94660, 94661,
      94662, 94666, 94701, 94702, 94703, 94704, 94705, 94706, 94707, 94708,
      94709, 94710, 94712, 94720, 94801, 94802, 94803, 94804, 94805, 94806,
      94807, 94808, 94820, 94850, 94875, 94901, 94903, 94904, 94912, 94913,
      94914, 94915, 94920, 94924, 94925, 94929, 94930, 94933, 94937, 94938,
      94939, 94940, 94941, 94942, 94945, 94946, 94947, 94948, 94949, 94950,
      94956, 94957, 94960, 94963, 94964, 94965, 94966, 94970, 94971, 94973,
      94974, 94976, 94977, 94978, 94979, 94998,
    ],
  },
  {
    MSA: "San Jose-Sunnyvale-Santa Clara CA MSA",
    zipCodes: [
      94022, 94023, 94024, 94035, 94039, 94040, 94041, 94042, 94043, 94085,
      94086, 94087, 94088, 94089, 94090, 94301, 94302, 94304, 94305, 94306,
      94309, 94310, 95002, 95008, 95009, 95011, 95013, 95014, 95015, 95020,
      95021, 95023, 95024, 95026, 95030, 95031, 95032, 95033, 95035, 95036,
      95037, 95038, 95042, 95043, 95044, 95045, 95046, 95050, 95051, 95052,
      95053, 95054, 95055, 95056, 95070, 95071, 95075, 95101, 95102, 95103,
      95106, 95108, 95109, 95110, 95111, 95112, 95113, 95114, 95115, 95116,
      95117, 95118, 95119, 95120, 95121, 95122, 95123, 95124, 95125, 95126,
      95127, 95128, 95129, 95130, 95131, 95132, 95133, 95134, 95135, 95136,
      95137, 95138, 95139, 95140, 95141, 95142, 95148, 95150, 95151, 95152,
      95153, 95154, 95155, 95156, 95157, 95158, 95159, 95160, 95161, 95164,
      95170, 95171, 95172, 95173, 95190, 95191, 95192, 95193, 95194, 95196,
    ],
  },
  {
    MSA: "Santa Cruz-Watsonville CA MSA",
    zipCodes: [
      95001, 95003, 95005, 95006, 95007, 95010, 95017, 95018, 95019, 95041,
      95060, 95061, 95062, 95063, 95064, 95065, 95066, 95067, 95073, 95076,
      95077,
    ],
  },
  {
    MSA: "Santa Rosa-Petaluma CA MSA",
    zipCodes: [
      94922, 94923, 94926, 94927, 94928, 94931, 94951, 94952, 94953, 94954,
      94955, 94972, 94975, 94999, 95401, 95402, 95403, 95404, 95405, 95406,
      95407, 95408, 95409, 95412, 95416, 95419, 95421, 95425, 95430, 95431,
      95433, 95436, 95439, 95441, 95442, 95444, 95446, 95448, 95450, 95452,
      95462, 95465, 95471, 95472, 95473, 95476, 95480, 95486, 95487, 95492,
      95497,
    ],
  },
  {
    MSA: "Stockton CA MSA",
    zipCodes: [
      95201, 95202, 95203, 95204, 95205, 95206, 95207, 95208, 95209, 95210,
      95211, 95212, 95213, 95215, 95219, 95220, 95227, 95230, 95231, 95234,
      95236, 95237, 95240, 95241, 95242, 95253, 95258, 95267, 95269, 95290,
      95296, 95297, 95298, 95304, 95320, 95330, 95336, 95337, 95366, 95376,
      95377, 95378, 95385, 95391, 95686,
    ],
  },
  {
    MSA: "Vallejo-Fairfield CA MSA",
    zipCodes: [
      94510, 94512, 94533, 94534, 94535, 94571, 94585, 94589, 94590, 94591,
      94592, 95620, 95625, 95687, 95688, 95696,
    ],
  },
];

const michael = [
  {
    MSA: "Albuquerque NM MSA",
    zipCodes: [
      87001, 87002, 87004, 87006, 87008, 87009, 87013, 87016, 87018, 87022,
      87023, 87024, 87025, 87027, 87031, 87032, 87034, 87035, 87036, 87041,
      87042, 87043, 87044, 87046, 87047, 87048, 87052, 87053, 87057, 87059,
      87060, 87061, 87063, 87068, 87070, 87072, 87083, 87101, 87102, 87103,
      87104, 87105, 87106, 87107, 87108, 87109, 87110, 87111, 87112, 87113,
      87114, 87115, 87116, 87117, 87118, 87119, 87120, 87121, 87122, 87123,
      87124, 87125, 87131, 87144, 87151, 87153, 87154, 87158, 87165, 87174,
      87176, 87181, 87184, 87185, 87187, 87190, 87191, 87192, 87193, 87194,
      87195, 87196, 87197, 87198, 87199, 87201, 87910, 88321,
    ],
  },
  { MSA: "Boulder CO MSA", zipCodes: [] },
  { MSA: "Denver-Aurora CO MSA", zipCodes: [] },
  { MSA: "Fort Collins-Loveland CO MSA", zipCodes: [] },
  { MSA: "Greeley CO MSA", zipCodes: [] },
  { MSA: "Ogden-Clearfield UT MSA", zipCodes: [] },
  { MSA: "Phoenix-Mesa-Scottsdale AZ MSA", zipCodes: [] },
  { MSA: "Provo-Orem UT MSA", zipCodes: [] },
  { MSA: "Reno-Sparks NV MSA", zipCodes: [] },
  { MSA: "Salt Lake City UT MSA", zipCodes: [] },
];

const mark = [
  { MSA: "Amarillo TX MSA", zipCodes: [] },
  { MSA: "Austin-Round Rock TX MSA", zipCodes: [] },
  { MSA: "Baton Rouge LA MSA", zipCodes: [] },
  { MSA: "Brownsville-Harlingen TX MSA", zipCodes: [] },
  { MSA: "Dallas-Fort Worth-Arlington TX MSA", zipCodes: [] },
  { MSA: "Houston-Sugar Land-Baytown TX MSA", zipCodes: [] },
  { MSA: "McAllen-Edinburg-Mission TX MSA", zipCodes: [] },
  { MSA: "Midland TX MSA", zipCodes: [] },
  { MSA: "New Orleans-Metairie-Kenner LA MSA", zipCodes: [] },
  { MSA: "Odessa TX MSA", zipCodes: [] },
  { MSA: "Oklahoma City OK MSA", zipCodes: [] },
  { MSA: "San Antonio TX MSA", zipCodes: [] },
  { MSA: "TX NONMETROPOLITAN AREA", zipCodes: [] },
];

const ementi = [
  { MSA: "Cape Coral-Fort Myers FL MSA", zipCodes: [] },
  { MSA: "Jacksonville FL MSA", zipCodes: [] },
  { MSA: "Kansas City MO-KS MSA", zipCodes: [] },
  { MSA: "Lakeland FL MSA", zipCodes: [] },
  { MSA: "Miami-Fort Lauderdale-Pompano Beach FL MSA", zipCodes: [] },
  { MSA: "Omaha-Council Bluffs NE-IA MSA", zipCodes: [] },
  { MSA: "Orlando-Kissimmee FL MSA", zipCodes: [] },
  { MSA: "Pensacola-Ferry Pass-Brent FL MSA", zipCodes: [] },
  { MSA: "Sarasota-Bradenton-Venice FL MSA", zipCodes: [] },
  { MSA: "St. Louis MO-IL MSA", zipCodes: [] },
  { MSA: "Tallahassee FL MSA", zipCodes: [] },
  { MSA: "Tampa-St. Petersburg-Clearwater FL", zipCodes: [] },
  { MSA: "Wichita KS MSA", zipCodes: [] },
];
