import { Partner, TimelineEvent, ServiceItem, ProductItem, JobPosition } from '../types';

export const PARTNERS_DATA: Partner[] = [
  {
    id: 'industry-ministry',
    nameAr: 'وزارة الصناعة المصرية',
    nameEn: 'Ministry of Industry',
    roleAr: 'الاعتماد الصناعي والبيئي',
    roleEn: 'Industrial & Environmental Accreditation',
    type: 'government',
    logoText: 'وزارة الصناعة',
    logoBg: '#1e3a8a',
    descriptionAr: 'اعتماد رسمي للمنشآت الصناعية وتسهيل منظومة التدوير والتصدير الأخضر.',
    descriptionEn: 'Official accreditation for industrial recycling facilities and green export facilitation.'
  },
  {
    id: 'encpc',
    nameAr: 'المركز القومي للإنتاج الأنظف (ENCPC)',
    nameEn: 'Egypt National Cleaner Production Center',
    roleAr: 'الشريك الفني وكفاءة الموارد',
    roleEn: 'Technical Partner & Resource Efficiency',
    type: 'government',
    logoText: 'ENCPC',
    logoBg: '#0f766e',
    descriptionAr: 'تعاون فني واستشاري لتطبيق معايير الإنتاج الأنظف ونقل التكنولوجيا المستدامة.',
    descriptionEn: 'Technical and advisory collaboration to apply cleaner production standards and sustainable technology.'
  },
  {
    id: 'nahdet-el-mahrousa',
    nameAr: 'جمعية نهضة المحروسة',
    nameEn: 'Nahdet El Mahrousa',
    roleAr: 'حاضنة الأعمال والابتكار الاجتماعي',
    roleEn: 'Business Incubation & Social Innovation',
    type: 'accelerator',
    logoText: 'نهضة المحروسة',
    logoBg: '#c2410c',
    descriptionAr: 'الفوز بمسابقة برنامج Green Works 2020 بابتكار أول منظومة تجميع لزيت الطعام المستعمل.',
    descriptionEn: 'Winner of Green Works 2020 program for innovating Egypt’s first household UCO collection network.'
  },
  {
    id: 'afdb',
    nameAr: 'البنك الإفريقي للتنمية (AfDB)',
    nameEn: 'African Development Bank Group',
    roleAr: 'دعم الاقتصاد الأخضر والتنمية',
    roleEn: 'Green Economy & Growth Support',
    type: 'finance',
    logoText: 'AfDB',
    logoBg: '#15803d',
    descriptionAr: 'شراكة تنموية لدعم مشروعات الاقتصاد الدائري وريادة الأعمال الخضراء في مصر وإفريقيا.',
    descriptionEn: 'Development support for circular economy scalability and green entrepreneurship in Africa.'
  },
  {
    id: 'plstka',
    nameAr: 'تطبيق بلستكة (Plstka)',
    nameEn: 'Plstka Mobile Platform',
    roleAr: 'الشريك الرقمي ومنظومة التجميع',
    roleEn: 'Digital Logistics & Consumer Rewards',
    type: 'technology',
    logoText: 'Plstka',
    logoBg: '#109466',
    descriptionAr: 'الذراع الرقمي لإدارة التجميع الميداني، تحفيز الأسر بنظام النقاط وربط الماركت والشركات.',
    descriptionEn: 'Our digital platform connecting households, merchants and recycling logistics with rewards.'
  },
  {
    id: 'al-harameen',
    nameAr: 'الحرمين للأليو كيماويات',
    nameEn: 'Al Harameen Oleo Chemicals',
    roleAr: 'شريك تصنيع وتوزيع الجلسرين',
    roleEn: 'Glycerin & Oleochemical Partner',
    type: 'industrial',
    logoText: 'الحرمين',
    logoBg: '#0369a1',
    descriptionAr: 'شراكة صناعية في معالجة وتوزيع الجلسرين النقي ومشتقات الزيوت الصناعية.',
    descriptionEn: 'Industrial partnership in processing and supplying refined technical and USP glycerin.'
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '2018',
    titleAr: 'تأسيس GreenVision في محافظة الغربية',
    titleEn: 'Foundation in Gharbia Governorate',
    descAr: 'انطلاق الشركة برؤية طموحة لبناء منظومة متكاملة لتدوير المخلفات في منطقة الدلتا، مع التركيز على زيت الطعام المستعمل والفرز الأولي.',
    descEn: 'Founded with a pioneering vision to build an integrated waste recycling ecosystem in the Nile Delta, starting with used cooking oil and sorting.',
    highlight: true,
    badgeAr: 'الانطلاقة',
    badgeEn: 'Genesis'
  },
  {
    year: '2020',
    titleAr: 'جائزة مسابقة نهضة المحروسة - برنامج Green Works',
    titleEn: 'Nahdet El Mahrousa - Green Works 2020 Award',
    descAr: 'فازت الشركة بابتكار أول منظومة تجميع لزيت الطعام المستعمل من الأسر والمطاعم باستخدام المحطات الوسيطة في كل منطقة وإطلاق أكبر حملة توعية للفصل من المنبع والتبديل من الماركت.',
    descEn: 'Won first prize for designing the first decentralized community collection system for used cooking oil with intermediate hubs and grocery store redemption.',
    highlight: true,
    badgeAr: 'إنجاز وطني',
    badgeEn: 'National Award'
  },
  {
    year: '2022',
    titleAr: 'إطلاق تطبيق "بلستكة" والتحول الرقمي',
    titleEn: 'Launch of Plstka Digital Platform',
    descAr: 'التحول لمنظومة رقمية ذكية عبر إطلاق تطبيق بلستكة للتجميع بالنقاط، والتوسع التشغيلي ليغطي 3 محافظات رئيسية في إقليم الدلتا.',
    descEn: 'Pioneered digital transformation with the Plstka mobile app, introducing reward points for recycling and expanding across 3 Delta governorates.',
    highlight: false,
    badgeAr: 'التحول الرقمي',
    badgeEn: 'Digital Innovation'
  },
  {
    year: '2024',
    titleAr: 'تدشين خطوط خامات البلاستيك PCR وحلول TPE',
    titleEn: 'Industrial PCR Plastics & Automotive TPE Line',
    descAr: 'إدخال خطوط إنتاج حبيبات PP و HDPE معادة التدوير بطاقة تجاوزت 200 طن شهرياً، وتوريد خامات وألواح TPE لصناعة فرش وبطانات السيارات.',
    descEn: 'Commissioned modern PCR PP and HDPE pelletizing lines exceeding 200 tons/month, alongside high-grade TPE sheet supplies for automotive applications.',
    highlight: false,
    badgeAr: 'التوسع الصناعي',
    badgeEn: 'Industrial Scaling'
  },
  {
    year: '2026',
    titleAr: 'الريادة الإقليمية والتصدير الدولي',
    titleEn: 'Regional Circular Leadership & Global Export',
    descAr: 'الوصول لأكثر من 85,000 طن مخلفات مجمعة، وتصدير حبيبات البلاستيك، الجلسرين، وبيليت الخشب إلى الأسواق العالمية مع الحفاظ على التميز الجغرافي بالدلتا.',
    descEn: 'Surpassing 85,000 tons of diverted waste, exporting premium PCR pellets, USP glycerin, and wood pellets globally while maintaining deep Delta regional dominance.',
    highlight: true,
    badgeAr: 'الريادة العالمية',
    badgeEn: 'Global Vision'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'uco',
    icon: 'Droplets',
    titleAr: 'تجميع وتدوير زيت الطعام المستعمل',
    titleEn: 'Used Cooking Oil (UCO) Collection',
    summaryAr: 'تجميع معتمد من المطاعم والمنشآت والأسر، وإعادة تدويره إلى وقود حيوي (Biodiesel) وجلسرين نقي وفق أعلى المعايير.',
    summaryEn: 'Certified collection from restaurants, factories, and households, converted into sustainable biodiesel and refined glycerin.',
    detailsAr: [
      'شهادات تخلص معتمدة (Waste Transfer Notes)',
      'عقود توريد شهرية للمطاعم والفنادق بأسعار مجزية',
      'حاويات تخزين آمنة ومقاومة للتسرب مجاناً',
      'جدول تجميع دوري والتزام كامل بالمواعيد'
    ],
    detailsEn: [
      'Certified Waste Transfer documentation',
      'Long-term purchase contracts for commercial kitchens',
      'Free leak-proof storage drums and equipment',
      'Strict scheduled logistics and instant digital receipts'
    ],
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'Top Service'
  },
  {
    id: 'solid-waste',
    icon: 'Trash2',
    titleAr: 'إدارة المخلفات الصلبة والإلكترونية',
    titleEn: 'Solid & E-Waste Management',
    summaryAr: 'حلول شاملة للشركات والمصانع لفرز وتصنيف وإعادة تدوير المخلفات الصناعية الصلبة والخردة الإلكترونية بأمان بيئي تام.',
    summaryEn: 'Comprehensive industrial solid and electronic waste management ensuring zero landfill impact and environmental compliance.',
    detailsAr: [
      'تفكيك وفرز آمن للأجهزة واللوحات الإلكترونية',
      'إدارة مخلفات التعبئة والتغليف والكرتون والمعادن',
      'تقارير أثر بيئي شهرية للمنشأة',
      'تطبيق اشتراطات جهاز تنظيم إدارة المخلفات (WMRA)'
    ],
    detailsEn: [
      'Safe dismantling and recovery of e-waste components',
      'Packaging, corrugated cardboard and metals recycling',
      'Monthly corporate environmental impact reports',
      'Full compliance with Egyptian WMRA environmental laws'
    ]
  },
  {
    id: 'pcr-plastics',
    icon: 'Boxes',
    titleAr: 'خامات البلاستيك المعاد تدويره (PCR)',
    titleEn: 'PCR Recycled Plastic Materials',
    summaryAr: 'إنتاج وتوريد حبيبات بولي بروبيلين (PP Homopolymer) وبولي إيثيلين (HDPE Blow Moulding) عالية النقاوة للصناعات التحويلية.',
    summaryEn: 'Production and export of premium PCR PP Homopolymer and PCR HDPE Blow Moulding pellets with consistent MFI for manufacturers.',
    detailsAr: [
      'طاقة إنتاجية تتجاوز 200 طن شهرياً لخط PP',
      '100% خامات صناعية BOPP خاضعة للرقابة المخبرية',
      'حبيبات متجانسة بدرجات ألوان متعددة (شفاف، حليبي، ملون)',
      'جاهزية فورية للحقن والنفخ والتصدير'
    ],
    detailsEn: [
      'Production capacity exceeding 200 metric tons/month',
      '100% post-industrial BOPP film scrap from single controlled source',
      'Uniform spherical pellets with stable Melt Flow Index',
      'Ready for injection, blow moulding, and international export'
    ],
    badgeAr: 'تصدير دولي',
    badgeEn: 'Export Ready'
  },
  {
    id: 'tpe-automotive',
    icon: 'Car',
    titleAr: 'خامات TPE وحلول صناعة السيارات',
    titleEn: 'TPE Materials & Automotive Solutions',
    summaryAr: 'توريد رولات وألواح الإيلاستومر الحراري (TPE) المتطورة لتشكيل دواسات وبطانات أرضيات وشنط السيارات والقطع الصناعية.',
    summaryEn: 'Supplying flexible, formable TPE rolls and sheets for automotive thermoforming: 3D floor mats, trunk liners, and interior trims.',
    detailsAr: [
      'رولات وألواح بسماكات ومقاسات ونقشات مخصصة',
      'مقاومة فائقة للحرارة، الصدمات، المياه والتآكل اليومي',
      'تشكيل حراري دقيق (Thermoforming) مع حواف مرفوعة مانعة للانزلاق',
      'شريك معتمد لمصنعي وموردي قطع غيار السيارات (Tier-1)'
    ],
    detailsEn: [
      'Custom sheet rolls in various thicknesses, textures and widths',
      'Superior impact resistance, flexibility, and easy-clean surface',
      'Optimized for 3D thermoforming with anti-slip raised borders',
      'Supplying Tier-1 automotive manufacturers and thermoformers'
    ],
    badgeAr: 'تخصص فريد',
    badgeEn: 'Automotive Grade'
  },
  {
    id: 'biomass',
    icon: 'Flame',
    titleAr: 'الوقود الحيوي والمخلفات الزراعية (Biomass)',
    titleEn: 'Green Vision Biomass & Wood Pellets',
    summaryAr: 'تصنيع بيليت الخشب الطبيعي عالي الكفاءة الحرارية وتوريد المخلفات الزراعية المعالجة لتوليد الطاقة والأعلاف والتسميد.',
    summaryEn: 'Manufacturing natural compressed wood pellets and supplying agricultural residues for bioenergy, heating, and feed industries.',
    detailsAr: [
      'بيليت خشبي مضغوط 6-8 مم بدون إضافات كيميائية',
      'كفاءة احتراق حرارية عالية ونسبة رماد ورطوبة منخفضة جداً',
      'استغلال مستدام لقش الأرز والمخلفات الزراعية في الدلتا',
      'بديل اقتصادي ونظيف للوقود الأحفوري للمصانع والمزارع'
    ],
    detailsEn: [
      '6-8mm compressed clean wood pellets with zero chemical binders',
      'High caloric thermal value with ultra-low ash and moisture',
      'Sustainable conversion of Delta agricultural crop residues',
      'Cost-effective clean fuel alternative for industrial boilers'
    ]
  },
  {
    id: 'plstka-tech',
    icon: 'Smartphone',
    titleAr: 'تطبيق بلستكة والحلول الرقمية',
    titleEn: 'Plstka App & Smart Logistics',
    summaryAr: 'منظومة لوجستية ذكية تربط الأسر والمطاعم ومندوبي التجميع بتطبيق للهاتف المحمول يمنح نقاطاً وهدايا فورية مقابل المخلفات.',
    summaryEn: 'Smart digital platform connecting generators and logistics fleets with instant reward points, redeemable at supermarkets.',
    detailsAr: [
      'تطبيق متوفر على Google Play وحل ويب متكامل',
      'نظام نقاط واستبدال بمشتريات وسلع تموينية من الماركت',
      'تتبع مباشر لمسارات سيارات التجميع وتوقيت الوصول',
      'لوحة تحكم ذكية للشركات لمتابعة كميات التدوير لحظياً'
    ],
    detailsEn: [
      'Mobile app on Google Play + comprehensive web portal',
      'Points loyalty system redeemable for grocery products',
      'Live GPS fleet dispatch and smart route optimization',
      'Enterprise dashboard for real-time sustainability metrics'
    ],
    badgeAr: 'تطبيق ذكي',
    badgeEn: 'App Powered'
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  // PP Products
  {
    id: 'pp-natural',
    category: 'pp',
    titleAr: 'حبيبات PP Homopolymer - شفاف طبيعي',
    titleEn: 'PCR PP Homopolymer - Natural Transparent',
    gradeAr: 'درجة Natural (شفاف)',
    gradeEn: 'Grade Natural (Transparent)',
    descAr: 'حبيبات بولي بروبيلين هوموبوليمر فائقة النقاء، شفافة تماماً بدون إضافات تلوين، مصنعة 100% من مخلفات أفلام BOPP الصناعية من مصدر واحد متجانس.',
    descEn: 'Ultra-pure PCR PP Homopolymer pellets, completely transparent with zero color additives, produced 100% from post-industrial BOPP film scrap from a single controlled source.',
    specsAr: [
      'المصدر: 100% مخلفات BOPP صناعية من مصدر واحد',
      'الشكل: حبيبات كروية منتظمة ذات سطح ناعم',
      'معدل الانصهار (MFI): ثابت ومستقر على مدار الدفعات',
      'مناسبة كأساس ممتاز للتلوين حسب متطلبات العميل'
    ],
    specsEn: [
      'Source: 100% single-source post-industrial BOPP film scrap',
      'Form: Uniform spherical pellets with smooth finish',
      'Melt Flow Index: Highly consistent across batches',
      'Ideal base for custom masterbatch compounding and coloring'
    ],
    colorAr: 'شفاف طبيعي',
    colorEn: 'Natural Transparent',
    colorHex: '#e2e8f0',
    applicationsAr: ['الحقن (Injection Moulding)', 'المنتجات المنزلية', 'القطع الصناعية', 'الكمباوند (Compounding)'],
    applicationsEn: ['Injection Moulding', 'Household Goods', 'Industrial Components', 'Compounding'],
    capacityAr: '+200 طن متري / شهرياً',
    capacityEn: '+200 Metric Tons / Month'
  },
  {
    id: 'pp-milky-white',
    category: 'pp',
    titleAr: 'حبيبات PP Homopolymer - أبيض حليبي',
    titleEn: 'PCR PP Homopolymer - Milky White',
    gradeAr: 'درجة Milky White (حليبي)',
    gradeEn: 'Grade Milky White',
    descAr: 'حبيبات بولي بروبيلين بلون أبيض حليبي موحد ولمعان طبيعي، مع تجانس عالي في الحجم والشكل وثبات حراري متميز أثناء التشكيل.',
    descEn: 'Uniform milky white PP pellets with natural sheen, high particle uniformity, and exceptional thermal stability during injection moulding.',
    specsAr: [
      'المصدر: 100% مخلفات BOPP صناعية منتقاة بعناية',
      'الشكل: حبيبات كروية متجانسة',
      'ثبات حراري ممتاز أثناء التصنيع لتقليل الفاقد',
      'تعبئة قياسية في شكائر صناعية محكمة'
    ],
    specsEn: [
      'Source: 100% post-industrial BOPP scrap',
      'Form: Uniform spherical pellets',
      'Superior thermal stability minimizing processing scrap',
      'Packed in heavy-duty industrial woven bags'
    ],
    colorAr: 'أبيض حليبي',
    colorEn: 'Milky White',
    colorHex: '#f8fafc',
    applicationsAr: ['الأدوات المنزلية والعلب', 'الصناديق البلاستيكية', 'قطع السيارات الداخلية', 'التطبيقات الصناعية العامة'],
    applicationsEn: ['Housewares & Containers', 'Plastic Crates', 'Automotive Trims', 'General PP Applications'],
    capacityAr: '+200 طن متري / شهرياً',
    capacityEn: '+200 Metric Tons / Month'
  },

  // HDPE Products
  {
    id: 'hdpe-natural-white',
    category: 'hdpe',
    titleAr: 'حبيبات HDPE Blow Moulding - أبيض طبيعي',
    titleEn: 'PCR HDPE Blow Moulding - Natural White',
    gradeAr: 'درجة Natural White',
    gradeEn: 'Grade Natural White',
    descAr: 'حبيبات بولي إيثيلين عالي الكثافة منتجة من عبوات وجراكن HDPE مستهلكة منتقاة من الدرجة الأولى بعد الفرز الدقيق والغسيل وفلترة المصهور.',
    descEn: 'Premium high-density polyethylene pellets recycled from sorted first-grade consumer bottles and containers, featuring melt-filtration and consistent blow-moulding performance.',
    specsAr: [
      'المصدر: عبوات وجراكن HDPE مستهلكة فرز أول',
      'الشكل: حبيبات أسطوانية منتظمة',
      'كثافة متوازنة ومقاومة عالية للإجهاد البيئي (ESCR)',
      'مناسب للزجاجات والعبوات متعددة الأحجام'
    ],
    specsEn: [
      'Source: First-grade post-consumer HDPE bottles and jerricans',
      'Form: Uniform cylindrical pellets',
      'Balanced density with high Environmental Stress Crack Resistance (ESCR)',
      'Suitable for single and multi-layer blow moulding'
    ],
    colorAr: 'أبيض طبيعي',
    colorEn: 'Natural White',
    colorHex: '#f1f5f9',
    applicationsAr: ['زجاجات المنظفات والمطهرات', 'الجراكن الصناعية', 'عبوات المواد الكيميائية', 'التغليف الصناعي'],
    applicationsEn: ['Detergent & Disinfectant Bottles', 'Jerry Cans', 'Chemical Containers', 'Industrial Packaging'],
    capacityAr: 'توريد مستمر بعقود طويلة الأجل',
    capacityEn: 'Continuous supply with long-term agreements'
  },
  {
    id: 'hdpe-yellow',
    category: 'hdpe',
    titleAr: 'حبيبات HDPE Blow Moulding - أصفر',
    titleEn: 'PCR HDPE Blow Moulding - Yellow',
    gradeAr: 'درجة Yellow (أصفر نقي)',
    gradeEn: 'Grade Yellow',
    descAr: 'حبيبات HDPE بلون أصفر متجانس وثابت، معبأة في أكياس مفرغة من الهواء للحفاظ على النظافة وخلوها التام من الرطوبة.',
    descEn: 'Vibrant yellow HDPE pellets with homogeneous color dispersion, vacuum packed to protect against moisture and contamination.',
    specsAr: [
      'اللون: أصفر ثابت ومشرق',
      'التعبئة: أكياس مفرغة من الهواء (Vacuum Packed)',
      'مقاومة كيميائية عالية لأحماض وزيوت التغليف',
      'جاهزة للنفخ المباشر دون الحاجة لإضافات'
    ],
    specsEn: [
      'Color: Consistent vibrant yellow',
      'Packaging: Vacuum sealed bags for purity',
      'High chemical resistance to oils and aggressive liquids',
      'Direct blow moulding ready with zero additional masterbatch needed'
    ],
    colorAr: 'أصفر مشرق',
    colorEn: 'Vibrant Yellow',
    colorHex: '#eab308',
    applicationsAr: ['جراكن الزيوت والكيماويات', 'عبوات المنظفات الصفراء', 'الحواجز المرورية البلاستيكية'],
    applicationsEn: ['Oil & Lubricant Jerry Cans', 'Yellow Consumer Bottles', 'Safety & Traffic Cones'],
    capacityAr: 'دفعات دورية مجدولة',
    capacityEn: 'Scheduled batch supply'
  },
  {
    id: 'hdpe-blue',
    category: 'hdpe',
    titleAr: 'حبيبات HDPE Blow Moulding - أزرق',
    titleEn: 'PCR HDPE Blow Moulding - Blue',
    gradeAr: 'درجة Blue (أزرق صناعي)',
    gradeEn: 'Grade Blue',
    descAr: 'حبيبات HDPE بلون أزرق داكن وثابت خالية من الشوائب، مخصصة لصناعة البراميل والجراكن والعبوات الكيميائية الصناعية.',
    descEn: 'Industrial blue HDPE granules with deep pigmentation, ideal for manufacturing chemical drums, containers, and agrochemical packaging.',
    specsAr: [
      'اللون: أزرق صناعي داكن ومقاوم للبهتان',
      'الشكل: حبيبات أسطوانية منتظمة خالية من الشوائب',
      'متانة فائقة وقدرة تحمل للصدمات والسقوط',
      'مطابقة لمواصفات نقل السوائل الصناعية'
    ],
    specsEn: [
      'Color: Deep industrial blue with UV resistance',
      'Form: Clean cylindrical granules free of dust',
      'High drop and impact tolerance',
      'Meets standards for hazardous liquid transport containers'
    ],
    colorAr: 'أزرق داكن',
    colorEn: 'Industrial Blue',
    colorHex: '#2563eb',
    applicationsAr: ['براميل وجراكن الكيماويات 20L - 60L', 'عبوات المبيدات والمخصبات', 'المنصات والبالتات البلاستيكية'],
    applicationsEn: ['20L-60L Chemical Jerricans', 'Agrochemical Containers', 'Plastic Pallets & Storage'],
    capacityAr: 'توريد شهري ثابت',
    capacityEn: 'Consistent monthly volume'
  },
  {
    id: 'hdpe-red',
    category: 'hdpe',
    titleAr: 'حبيبات HDPE Blow Moulding - أحمر',
    titleEn: 'PCR HDPE Blow Moulding - Red',
    gradeAr: 'درجة Red (أحمر زاهي)',
    gradeEn: 'Grade Red',
    descAr: 'حبيبات HDPE بلون أحمر زاهي وثابت، بلمعان وتجانس لوني عالي، مخصصة للزجاجات والعبوات المميزة والقطع الصناعية.',
    descEn: 'High-visibility red HDPE pellets with bright uniform saturation and high gloss, ideal for consumer bottles and safety parts.',
    specsAr: [
      'اللون: أحمر زاهي متجانس',
      'لمعان سطحي ممتاز وسلاسة في التشكيل',
      'مقاومة عالية للتشقق تحت الضغط',
      'إمكانية توفير عينات قبل التعاقد'
    ],
    specsEn: [
      'Color: Bright uniform red',
      'Superior surface gloss and extrusion ease',
      'High stress crack resistance',
      'Sample batches provided prior to contract'
    ],
    colorAr: 'أحمر زاهي',
    colorEn: 'Bright Red',
    colorHex: '#dc2626',
    applicationsAr: ['عبوات سوائل السيارات (مياه التبريد)', 'العبوات التحذيرية', 'أغطية الزجاجات والقوارير'],
    applicationsEn: ['Automotive Coolant Containers', 'Warning Signage & Parts', 'Caps and Closures'],
    capacityAr: 'حسب جداول الطلب المسبق',
    capacityEn: 'On-demand production batches'
  },

  // TPE Section
  {
    id: 'tpe-solutions',
    category: 'tpe',
    titleAr: 'رولات وألواح TPE وحلول صناعة السيارات',
    titleEn: 'TPE Rolls, Sheets & Automotive Solutions',
    gradeAr: 'خامات إيلاستومر حراري (TPE / TPO)',
    gradeEn: 'Thermoplastic Elastomer (TPE / TPO)',
    descAr: 'خامات TPE متطورة في صورة رولات وألواح للمصانع والورش المتخصصة في التشكيل الحراري (Thermoforming)، مخصصة لدواسات وبطانات أرضيات وشنط السيارات والقطع الوقائية.',
    descEn: 'Advanced TPE sheet and roll materials designed for thermoforming companies and automotive Tier-1 suppliers for manufacturing 3D floor liners, trunk liners, and protective parts.',
    specsAr: [
      'رولات وألواح بسماكات وعروض ونقشات سطحية مختلفة حسب متطلبات التشكيل',
      'مرونة فائقة وتماسك عالٍ ومقاومة للانزلاق وسهولة تامة في التنظيف',
      'مقاومة كاملة للمياه والزيوت والأتربة وعوامل التآكل اليومي',
      'سلسلة قيمة متكاملة: حبيبات TPE ← رولات/ألواح ← تشكيل حراري ← تشذيب ← منتج نهائي'
    ],
    specsEn: [
      'Available in diverse thicknesses, widths, textures and forming specs',
      'High flexibility, durable impact resistance, anti-slip surface and easy wash',
      'Protection against water, dirt, grease, and heavy daily wear',
      'Full manufacturing chain: Granules → Sheet/Roll → Thermoforming → Trimming → Finished Component'
    ],
    colorAr: 'أسود معتم / نقشات مخصصة',
    colorEn: 'Matte Black / Textured',
    colorHex: '#18181b',
    applicationsAr: [
      'دواسات أرضية السيارات (Automotive Floor Mats)',
      'بطانات أرضيات 3D بحواف مرفوعة (3D Floor Liners)',
      'فرش وبطانات شنطة السيارة (Trunk & Cargo Liners)',
      'قطع الديكور والتشطيب الداخلي (Interior Trim Components)',
      'قطع الحماية الصناعية (Industrial Protective Parts)'
    ],
    applicationsEn: [
      'Automotive Floor Mats',
      '3D Floor Liners with raised edges',
      'Trunk & Cargo Liners',
      'Interior Trim Components',
      'Industrial Protective Parts'
    ],
    capacityAr: 'توريد إقليمي مستمر لمصانع السيارات والتجهيز',
    capacityEn: 'Regional supply for automotive manufacturers & distributors'
  },

  // Biomass Section
  {
    id: 'biomass-pellets',
    category: 'biomass',
    titleAr: 'بيليت الخشب والمخلفات الزراعية (Green Vision Biomass)',
    titleEn: 'Green Vision Biomass & Clean Wood Pellets',
    gradeAr: 'وقود حيوي مضغوط (Wood Pellets 6-8mm)',
    gradeEn: 'Clean Biofuel Pellets (6-8mm)',
    descAr: 'بيليت خشبي مضغوط عالي الجودة مصنع من نشارة ومخلفات الأخشاب الطبيعية بدون إضافات كيميائية، مع توريد مخلفات زراعية معالجة لقطاعات الطاقة والأعلاف والتسميد.',
    descEn: 'Premium compressed wood pellets made from pure natural wood residues without chemical binders, offering clean high thermal output and low ash for industrial heating.',
    specsAr: [
      'القطر: 6-8 مم أسطواني مضغوط عالي الكثافة',
      'نسبة الرطوبة: منخفضة جداً لضمان أعلى كفاءة احتراق حراري',
      'نسبة الرماد: منخفضة لحماية الغلايات والمراجل الصناعية',
      'مخلفات زراعية مُجمعة ومجففة للأعلاف والطاقة والتسميد العضوي'
    ],
    specsEn: [
      'Diameter: 6-8mm uniform dense cylindrical pellets',
      'Moisture Content: Low moisture ensuring maximum caloric combustion',
      'Ash Content: Minimal residual ash for industrial boiler safety',
      'Agricultural residues collected for bioenergy, feed, and organic compost'
    ],
    colorAr: 'خشب طبيعي مضغوط',
    colorEn: 'Natural Wood Brown',
    colorHex: '#854d0e',
    applicationsAr: ['مراجل ومواقد التدفئة الصناعية والمنزلية', 'محطات توليد الطاقة الحيوية', 'تصنيع الأعلاف الحيوانية', 'فرشة ومهاد الحيوانات'],
    applicationsEn: ['Industrial & Domestic Boiler Heating', 'Bioenergy Generation', 'Animal Feed Manufacturing', 'Animal Bedding'],
    capacityAr: 'توريد شاحنات وحاويات كاملة',
    capacityEn: 'Bulk truckloads & containerized export'
  },

  // Glycerin Section
  {
    id: 'glycerin-refined',
    category: 'glycerin',
    titleAr: 'جلسرين نقي ومكرر (Refined Glycerin USP Grade 99.5%)',
    titleEn: 'Refined Glycerin USP Grade 99.5%',
    gradeAr: 'درجة نقاوة USP Grade 99.5% & Technical',
    gradeEn: 'USP Grade 99.5% & Technical Grade',
    descAr: 'توريد جلسرين مكرر عالي النقاوة ناتج عن معالجة زيت الطعام المستعمل والزيوت النباتية، مطابق للمواصفات القياسية، معبأ في براميل زرقاء سعة 250 كجم وحاويات فليكسي تانك.',
    descEn: 'Supply of high-purity refined glycerin derived from sustainable vegetable and cooking oil processing, packed in certified 250kg steel/plastic drums and bulk flexitanks.',
    specsAr: [
      'نسبة النقاوة: 99.5% كحد أدنى (USP Grade)',
      'اللون: شفاف مائي عديم الرائحة',
      'التعبئة: براميل زرقاء 250 كجم / فليكسي تانك 20 طن',
      'شهادات جودة وتتبع كاملة لكل شحنة'
    ],
    specsEn: [
      'Purity: Minimum 99.5% (USP Pharmaceutical & Technical grade)',
      'Color: Water-white, odorless, high-viscosity liquid',
      'Packaging: 250 kg drums / 20-ton Flexitanks',
      'Batch certificates of analysis and full sustainability traceability'
    ],
    colorAr: 'شفاف مائي نقي',
    colorEn: 'Water Clear',
    colorHex: '#bae6fd',
    applicationsAr: ['الصناعات الكيميائية والراتنجات', 'سوائل مقاومة التجمد ومثبطات التآكل', 'مستحضرات التجميل والصابون', 'تغذية الأعلاف والصناعات الدوائية'],
    applicationsEn: ['Chemical Synthesis & Resins', 'Antifreeze & Coolants', 'Cosmetics & Soap Manufacturing', 'Pharmaceutical & Animal Feed'],
    capacityAr: 'توريد أسبوعي ثابت وشحنات تصدير',
    capacityEn: 'Regular weekly logistics & export shipments'
  }
];

export const JOBS_DATA: JobPosition[] = [
  {
    id: 'software-engineer',
    titleAr: 'مهندس برمجيات (Full Stack Software Engineer)',
    titleEn: 'Full Stack Software Engineer',
    deptAr: 'فريق التكنولوجيا ومنصة بلستكة',
    deptEn: 'Technology & Plstka Digital Team',
    locationAr: 'طنطا، محافظة الغربية / هجين (Hybrid)',
    locationEn: 'Tanta, Gharbia / Hybrid',
    typeAr: 'دوام كامل',
    typeEn: 'Full-time',
    descAr: 'تطوير وصيانة منصة بلستكة الرقمية وأنظمة تتبع أساطيل التجميع، وربط لوحات تحكم الشركات مع واجهات برمجة التطبيقات السحابية.',
    descEn: 'Build and scale the Plstka digital platform, fleet dispatch algorithms, and B2B corporate customer portals.',
    requirementsAr: [
      'خبرة 3+ سنوات في React، Node.js، وقواعد البيانات السحابية',
      'إلمام بتطبيقات الموبايل وإدارة الخرائط والـ Geolocation',
      'شغف ببناء حلول برمجية تخدم الاستدامة والبيئة'
    ],
    requirementsEn: [
      '3+ years experience with React, Node.js, and Cloud architectures',
      'Experience in geolocation, mapping APIs, and fleet logistics apps',
      'Passion for sustainability, circular economy, and impact tech'
    ]
  },
  {
    id: 'sustainability-expert',
    titleAr: 'خبير تنمية بيئية مستدامة (Environmental Sustainability Expert)',
    titleEn: 'Environmental Sustainability Expert',
    deptAr: 'قطاع الامتثال والأثر البيئي',
    deptEn: 'Compliance & Environmental Impact',
    locationAr: 'إقليم الدلتا / الغربية',
    locationEn: 'Delta Region / Gharbia',
    typeAr: 'دوام كامل',
    typeEn: 'Full-time',
    descAr: 'قياس وتدقيق نسب خفض البصمة الكربونية، وإعداد تقارير الالتزام البيئي لشهادات ISCC والتنسيق مع وزارة البيئة والمنظمات الدولية.',
    descEn: 'Lead greenhouse gas (GHG) accounting, audit ISCC and local environmental certifications, and interface with Ministry of Environment and international partners.',
    requirementsAr: [
      'مؤهل في الهندسة البيئية، العلوم البيئية أو إدارة الموارد',
      'معرفة عميقة بالقانون 202 لسنة 2020 لإدارة المخلفات في مصر',
      'خبرة في شهادات الاستدامة وتقارير الـ ESG'
    ],
    requirementsEn: [
      'Degree in Environmental Engineering, Sciences, or Resource Management',
      'In-depth knowledge of Egyptian Waste Management Law 202/2020',
      'Experience with carbon accounting and sustainability frameworks'
    ]
  },
  {
    id: 'ux-designer',
    titleAr: 'مصمم تجربة مستخدم (UX/UI Product Designer)',
    titleEn: 'UX/UI Product Designer',
    deptAr: 'التصميم الرقمي والمنتج',
    deptEn: 'Digital Product Design',
    locationAr: 'عن بعد / طنطا',
    locationEn: 'Remote / Tanta',
    typeAr: 'دوام كامل أو جزئي',
    typeEn: 'Full-time / Part-time',
    descAr: 'تصميم وتحسين تجربة تطبيق بلستكة للأسر والشركات، وتطوير واجهات سهلة وبديهية لتشجيع سلوك الفصل من المنبع وتسهيل طلبات التجميع.',
    descEn: 'Design intuitive interfaces and gamified reward experiences for Plstka app users, households, and corporate procurement managers.',
    requirementsAr: [
      'خبرة مثبتة بمعرض أعمال (Portfolio) في تطبيقات المستهلك ولوحات البيانات',
      'إتقان أدوات Figma وتصميم التجارب ثنائية اللغة (عربي / إنجليزي)',
      'فهم سلوك المستخدم الميداني في مجتمعات الدلتا'
    ],
    requirementsEn: [
      'Proven portfolio in consumer mobile apps and B2B SaaS dashboards',
      'Expertise in Figma and bilingual Arabic/English responsive UI',
      'Empathy for everyday recycling behaviors and local market dynamics'
    ]
  }
];
