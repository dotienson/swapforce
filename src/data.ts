export type Phenotype = 'HB' | 'HG' | 'EH' | 'SB' | 'MIXED';

export type Texture = 'CRUNCHY' | 'CREAMY' | 'CHEWY' | 'HOT_SAVORY';

export interface Answer {
  text: string;
  scoreCategory?: Phenotype;
  score?: number;
  texture?: Texture;
}

export interface Question {
  id: number;
  text: string;
  type: 'phenotype' | 'texture' | 'situation' | 'preference';
  options: Answer[];
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Thời gian bạn cảm thấy no sau một bữa ăn là bao lâu?',
    type: 'phenotype',
    options: [
      { text: 'Dưới 2 giờ', scoreCategory: 'HG', score: 3 },
      { text: '2–3 giờ', scoreCategory: 'HG', score: 2 },
      { text: '3–4 giờ', scoreCategory: 'HG', score: 1 },
      { text: 'Trên 4 giờ', scoreCategory: 'HG', score: 0 },
    ],
  },
  {
    id: 2,
    text: 'Khi tiếp cận thức ăn yêu thích, bạn thường kết thúc bữa ăn khi nào?',
    type: 'phenotype',
    options: [
      { text: 'Khó dừng, hay "ăn cho hết"', scoreCategory: 'HB', score: 3 },
      { text: 'Thường ăn quá no', scoreCategory: 'HB', score: 2 },
      { text: 'Đôi khi quá tay', scoreCategory: 'HB', score: 1 },
      { text: 'Dễ dừng khi thấy vừa đủ', scoreCategory: 'HB', score: 0 },
    ],
  },
  {
    id: 3,
    text: 'Các cơn thèm ăn thường xuất hiện vào thời điểm nào hoặc trong hoàn cảnh nào?',
    type: 'phenotype',
    options: [
      { text: 'Lúc căng thẳng', scoreCategory: 'EH', score: 3 },
      { text: 'Lúc buồn/cô đơn', scoreCategory: 'EH', score: 2 },
      { text: 'Lúc mệt vì thiếu ngủ', scoreCategory: 'EH', score: 1 },
      { text: 'Chủ yếu thèm theo giờ bữa ăn', scoreCategory: 'EH', score: 0 },
    ],
  },
  {
    id: 4,
    text: 'Khi có sẵn thức ăn nhẹ trước mặt, mức độ tiêu thụ của bạn là:',
    type: 'phenotype',
    options: [
      { text: 'Ăn vô thức, không để ý', scoreCategory: 'HB', score: 3 },
      { text: 'Khó cưỡng, hay lấy thêm', scoreCategory: 'HB', score: 2 },
      { text: 'Ăn một ít rồi thôi', scoreCategory: 'HB', score: 1 },
      { text: 'Thường không ăn nếu không đói', scoreCategory: 'HB', score: 0 },
    ],
  },
  {
    id: 5,
    text: 'Đặc điểm cảm giác no sau bữa ăn của bạn thường là:',
    type: 'phenotype',
    options: [
      { text: 'Ăn xong vẫn thấy thiếu, muốn ăn tiếp', scoreCategory: 'HG', score: 3 },
      { text: 'No nhanh nhưng mau đói lại', scoreCategory: 'HG', score: 2 },
      { text: 'No ổn nhưng hay thèm đồ ăn vặt', scoreCategory: 'HG', score: 1 },
      { text: 'No ổn và giữ được lâu', scoreCategory: 'HG', score: 0 },
    ],
  },
  {
    id: 6,
    text: 'Thói quen ăn uống của bạn liên quan như thế nào đến yếu tố tâm lý?',
    type: 'phenotype',
    options: [
      { text: 'Ăn để tự thưởng', scoreCategory: 'EH', score: 3 },
      { text: 'Ăn để quên chuyện không vui', scoreCategory: 'EH', score: 2 },
      { text: 'Thỉnh thoảng ăn theo tâm trạng', scoreCategory: 'EH', score: 1 },
      { text: 'Ít khi ăn theo cảm xúc', scoreCategory: 'EH', score: 0 },
    ],
  },
  {
    id: 7,
    text: 'Tổng thời gian tĩnh tại (ngồi làm việc, xem điện thoại) trong ngày của bạn là:',
    type: 'phenotype',
    options: [
      { text: 'Trên 8 giờ', scoreCategory: 'SB', score: 3 },
      { text: '6–8 giờ', scoreCategory: 'SB', score: 2 },
      { text: '4–6 giờ', scoreCategory: 'SB', score: 1 },
      { text: 'Dưới 4 giờ', scoreCategory: 'SB', score: 0 },
    ],
  },
  {
    id: 8,
    text: 'Tần suất tham gia các hoạt động thể chất có chủ ý của bạn là:',
    type: 'phenotype',
    options: [
      { text: 'Hầu như không', scoreCategory: 'SB', score: 3 },
      { text: '1–2 buổi/tuần', scoreCategory: 'SB', score: 2 },
      { text: '3–4 buổi/tuần', scoreCategory: 'SB', score: 1 },
      { text: '5+ buổi/tuần', scoreCategory: 'SB', score: 0 },
    ],
  },
  {
    id: 9,
    text: 'Đặc tính cấu trúc thức ăn nào bạn mong muốn nhất?',
    type: 'texture',
    options: [
      { text: 'Giòn rôm rốp', texture: 'CRUNCHY' },
      { text: 'Mềm mịn & béo', texture: 'CREAMY' },
      { text: 'Dai nhai lâu', texture: 'CHEWY' },
      { text: 'Nóng hổi & đậm đà', texture: 'HOT_SAVORY' },
    ],
  },
  {
    id: 10,
    text: 'Bạn ưu tiên nhóm hương vị nào?',
    type: 'preference',
    options: [
      { text: 'Mặn & đậm đà' },
      { text: 'Ngọt' },
      { text: 'Chua/cay' },
      { text: 'Không rõ, tuỳ món' },
    ],
  },
  {
    id: 11,
    text: 'Hoàn cảnh nào khiến bạn dễ vượt quá lượng thức ăn khuyến nghị nhất?',
    type: 'situation',
    options: [
      { text: 'Xem phim/tụ tập bạn bè' },
      { text: 'Buổi chiều ở trường/văn phòng' },
      { text: 'Ăn khuya' },
      { text: 'Đi ăn hàng quán/tiệc tùng' },
    ],
  },
  {
    id: 12,
    text: 'Bạn ưu tiên mức độ thay đổi ("biến hình") nào trong bữa ăn?',
    type: 'preference',
    options: [
      { text: 'Thay đổi tối thiểu, dễ dàng nhất' },
      { text: 'Thay đổi thông minh, hiệu quả cao' },
      { text: 'Thay đổi mạnh mẽ nhất' },
      { text: 'Tùy chỉnh linh hoạt' },
    ],
  },
];

export interface SwapOption {
  text: string;
  tags: string[]; // [HB], [EH], etc.
  calorieReduction?: string; // e.g. "Giảm ~200 kcal"
}

export interface FoodItem {
  id: string;
  name: string;
  group: string;
  vibe: string;
  tags: string[]; // 'Giòn', 'Ngọt', 'Dai', 'Nóng', 'Uống'
  easyWin: SwapOption;
  smartUpgrade: SwapOption;
  planB: SwapOption;
}

export const FOOD_DATABASE: FoodItem[] = [
  // Category 1: Snack Giòn / Mặn
  {
    id: 'f1',
    name: 'Khoai tây chiên / Bim bim',
    group: 'Snack Giòn / Mặn',
    vibe: 'Giòn',
    tags: ['Giòn'],
    easyWin: { text: 'Bỏng ngô nổ khí (Air-popped): Thể tích cực lớn, rắc xíu bột phô mai mặn.', tags: ['HB', 'EH'] },
    smartUpgrade: { text: 'Đậu gà/Đậu lăng nướng gia vị: Rất giòn, nhai lâu, giàu chất xơ đặc.', tags: ['HG'], calorieReduction: 'Ít calo, tối ưu no lâu' },
    planB: { text: 'Đổ 1 phần nhỏ ra chén + ăn kèm dưa leo/cà rốt que.', tags: ['HB'] }
  },
  {
    id: 'f2',
    name: 'Gà rán',
    group: 'Snack Giòn / Mặn',
    vibe: 'Giòn/Nóng',
    tags: ['Giòn', 'Nóng'],
    easyWin: { text: 'Nấm đùi gà xé tẩm bột chiên NCKD: Dai, giòn, nóng hổi, cực ít calo.', tags: ['HB'] },
    smartUpgrade: { text: 'Ức gà tẩm yến mạch nướng NCKD: Lớp vỏ nướng giòn, nạc đạm no lâu.', tags: ['HG', 'SB'] },
    planB: { text: 'Lột vỏ chiên, chọn phần ức/thịt nạc trắng.', tags: ['EH'] }
  },
  {
    id: 'f3',
    name: 'Nem chua rán',
    group: 'Snack Giòn / Mặn',
    vibe: 'Giòn',
    tags: ['Giòn'],
    easyWin: { text: 'Chả ức gà bọc cốm nướng NCKD: Giữ được độ giòn rụm bên ngoài.', tags: ['HB'] },
    smartUpgrade: { text: 'Đậu hũ non tẩm bột mỏng nướng: Mềm trong, giòn ngoài, chấm tương ớt.', tags: ['HG'] },
    planB: { text: 'Giới hạn 2 xiên, uống 300ml nước ấm trước khi ăn.', tags: ['EH'] }
  },
  {
    id: 'f4',
    name: 'Bánh tráng trộn',
    group: 'Snack Giòn / Mặn',
    vibe: 'Dai/Mặn/Cay',
    tags: ['Dai'],
    easyWin: { text: 'Nộm đu đủ bò khô: Tăng gấp đôi đu đủ xanh (để nhai kỹ), giảm bò khô.', tags: ['HB', 'EH'] },
    smartUpgrade: { text: 'Miến dong trộn chua cay, ức gà xé: Sợi miến dai như bánh tráng, ít tải đường huyết.', tags: ['HG'] },
    planB: { text: 'Ăn chậm, để ly nước bên cạnh, ngừng 60s giữa chừng.', tags: ['EH'] }
  },

  // Category 2: Đồ Uống
  {
    id: 'f5',
    name: 'Trà sữa trân châu',
    group: 'Đồ Uống (Liquid Calories)',
    vibe: 'Ngọt/Dai',
    tags: ['Ngọt', 'Dai', 'Uống'],
    easyWin: { text: 'Hồng trà không đường + Topping nha đam: Mát, giòn sần sật, giải buồn miệng.', tags: ['HB', 'EH'] },
    smartUpgrade: { text: 'Trà sữa hạt (hạnh nhân) + Hạt chia ngâm nở: Độ sệt và dai tương tự trân châu.', tags: ['HG'] },
    planB: { text: 'Mua size S, 30% đường, nhiều đá, uống chậm.', tags: ['EH'] }
  },
  {
    id: 'f6',
    name: 'Nước ngọt có đường',
    group: 'Đồ Uống (Liquid Calories)',
    vibe: 'Ngọt',
    tags: ['Ngọt', 'Uống'],
    easyWin: { text: 'Nước khoáng có ga (Sparkling water) + Chanh tươi: Thỏa mãn cơn thèm bọt khí.', tags: ['HB', 'EH'] },
    smartUpgrade: { text: 'Kombucha ít đường: Ga tự nhiên, vị chua ngọt, tốt cho ruột.', tags: ['HG'] },
    planB: { text: 'Rót ra 1/2 lon vào ly đầy đá, pha loãng uống dần.', tags: ['HB', 'EH'] }
  },
  {
    id: 'f7',
    name: 'Cà phê sữa / Bạc xỉu',
    group: 'Đồ Uống (Liquid Calories)',
    vibe: 'Ngọt/Béo',
    tags: ['Ngọt', 'Uống'],
    easyWin: { text: 'Cà phê đen + Đường ăn kiêng (Stevia): Vẫn ngọt mà xén hẳn calo.', tags: ['HB', 'SB'] },
    smartUpgrade: { text: 'Cà phê + Sữa tươi tách béo (Skim milk) / Sữa hạt macca.', tags: ['HG', 'SB'] },
    planB: { text: 'Một nửa lượng bột canh sữa đặc bình thường, thêm đậm cà phê.', tags: ['EH'] }
  },
  {
    id: 'f8',
    name: 'Nước ép trái cây',
    group: 'Đồ Uống (Liquid Calories)',
    vibe: 'Ngọt',
    tags: ['Ngọt', 'Uống'],
    easyWin: { text: 'Nước Detox ngâm trái cây (Infused water): Lấy hương vị thơm ngọt.', tags: ['HB', 'EH'] },
    smartUpgrade: { text: 'Sinh tố nguyên xác (Smoothie): Xay bã trái cây + rau bina/cần tây (chất xơ cản hấp thu đường).', tags: ['HG'] },
    planB: { text: 'Chỉ ép nửa cốc bưởi/cam chua, không pha đường.', tags: ['HG'] }
  },

  // Category 3: Món Ngọt Tráng Miệng
  {
    id: 'f9',
    name: 'Kem (Ice cream)',
    group: 'Món Ngọt (Giải quyết Emotional Eating)',
    vibe: 'Béo/Mềm/Lạnh',
    tags: ['Ngọt'],
    easyWin: { text: 'Đá bào trái cây (Sorbet) tự làm: Dưa hấu xay nhuyễn đông lạnh.', tags: ['HB', 'EH'] },
    smartUpgrade: { text: 'Sữa chua Hy Lạp trộn quả mọng để ngăn đá: Đặc, chua ngọt, giàu casein.', tags: ['HG'] },
    planB: { text: 'Chỉ chọn 1-2 viên kem mini sau bữa chính.', tags: ['HB'] }
  },
  {
    id: 'f10',
    name: 'Chè',
    group: 'Món Ngọt (Giải quyết Emotional Eating)',
    vibe: 'Ngọt',
    tags: ['Ngọt'],
    easyWin: { text: 'Thạch sương sáo + xíu nước cốt dừa loãng: Mát mịn thanh nhẹ.', tags: ['HB', 'EH'] },
    smartUpgrade: { text: 'Chè đỗ đen/đỗ đỏ nấu bằng đường la hán quả (không dùng đường kính).', tags: ['HG'] },
    planB: { text: 'Ăn chè ít đá, chắt bỏ bớt nửa lượng nước cốt đường.', tags: ['EH'] }
  },
  {
    id: 'f11',
    name: 'Bánh ngọt',
    group: 'Món Ngọt (Giải quyết Emotional Eating)',
    vibe: 'Ngọt/Béo',
    tags: ['Ngọt'],
    easyWin: { text: 'Bánh gạo lứt nổ vị socola: Nhẹ, xốp, nhai vui miệng.', tags: ['HB'] },
    smartUpgrade: { text: 'Biscotti nguyên cám / Bánh chuối yến mạch: Độ ngọt tự nhiên từ chuối dẻo.', tags: ['HG'] },
    planB: { text: 'Cắt lại 1 lát thật mỏng, ngậm từ từ để thỏa mãn.', tags: ['HG', 'EH'] }
  },

  // Category 4: Bữa Chính
  {
    id: 'f12',
    name: 'Cơm tấm sườn bì chả',
    group: 'Bữa Chính (Món Việt phổ biến)',
    vibe: 'Mặn/Đậm',
    tags: ['Nóng'],
    easyWin: { text: 'Cơm xát dối/gạo lứt + Sườn cốt lết nướng (thay ba chỉ) + Trứng ốp la.', tags: ['HG', 'SB'] },
    smartUpgrade: { text: 'Xin chủ quán gấp đôi dưa leo/đồ chua để tạo độ no giả.', tags: ['HB'] },
    planB: { text: 'Bớt 1/2 chén cơm, nhưng tăng rau canh bù lại.', tags: ['HB', 'HG'] }
  },
  {
    id: 'f13',
    name: 'Cơm rang',
    group: 'Bữa Chính (Món Việt phổ biến)',
    vibe: 'Đậm/Dễ quá tay',
    tags: ['Nóng'],
    easyWin: { text: 'Mix 50% cơm trắng + 50% súp lơ trắng băm nhỏ (Cauliflower rice).', tags: ['HG'] },
    smartUpgrade: { text: 'Rang cùng trứng, xịt dầu olive bằng spray thay chảo ngập mỡ.', tags: ['SB'] },
    planB: { text: 'Dọn một bát canh lớn uốc xong mới bắt đầu ăn.', tags: ['EH'] }
  },
  {
    id: 'f14',
    name: 'Cơm gà',
    group: 'Bữa Chính (Món Việt phổ biến)',
    vibe: 'Mặn',
    tags: ['Nóng'],
    easyWin: { text: 'Đổi gà xối mỡ sang gà luộc/hấp gỏi hành tây.', tags: ['HG'] },
    smartUpgrade: { text: 'Trộn thêm các loại đậu (Hà Lan/Lăng) vào bát cơm để làm gạo chậm.', tags: ['HG'] },
    planB: { text: 'Lột bỏ phần da mỡ, xin nhiều rau răm, dưa leo tươi.', tags: ['SB'] }
  },
  {
    id: 'f15',
    name: 'Phở',
    group: 'Bún/Phở/Mì (Món nước)',
    vibe: 'Nóng/Đậm',
    tags: ['Nóng'],
    easyWin: { text: 'Báo quán: "Ít bánh phở, thật nhiều hành tây và giá trần".', tags: ['HB'] },
    smartUpgrade: { text: 'Gọi bò bắp/lõi rùa nạc thay nạm gầu, yêu cầu nước trong (bỏ mỡ nổi).', tags: ['HG'] },
    planB: { text: 'Chỉ húp phần nước trong, để lại một nửa lượng sợi.', tags: ['SB'] }
  },
  {
    id: 'f16',
    name: 'Bún bò',
    group: 'Bún/Phở/Mì (Món nước)',
    vibe: 'Nóng/Đậm',
    tags: ['Nóng'],
    easyWin: { text: 'Vớt bỏ sạch lớp sa tế dầu mỡ bên trên bề mặt.', tags: ['HB'] },
    smartUpgrade: { text: 'Thay 1/2 lượng bún bằng hoa chuối thái rối và rau thơm xé nát.', tags: ['HG'] },
    planB: { text: 'Đòi "bún thịt nạc", khước từ chân bò móng giò to uỳnh.', tags: ['EH'] }
  },
  {
    id: 'f17',
    name: 'Mì gói',
    group: 'Bún/Phở/Mì (Món nước)',
    vibe: 'Mặn/Béo',
    tags: ['Nóng'],
    easyWin: { text: 'Trụng bỏ nước sôi nhả mỡ lần 1 rồi mới chắt thêm nước luộc mới.', tags: ['SB'] },
    smartUpgrade: { text: 'Đổi sợi mì chiên sang miến dong / bún nưa / bún lứt.', tags: ['HG'] },
    planB: { text: 'Chan nước nấu với nấm, cải cúc, đập thêm quả trứng thay vì gói dầu mỡ gia vị của mì.', tags: ['SB', 'EH'] }
  },
  {
    id: 'f18',
    name: 'Bánh mì thịt',
    group: 'Bữa Chính (Tiêu chuẩn)',
    vibe: 'Giòn/Đậm',
    tags: ['Giòn', 'Nóng'],
    easyWin: { text: 'Kẹp gấp đôi rau mùi, đu đủ bào sợi, rau riếp xanh dưa chuột.', tags: ['SB'] },
    smartUpgrade: { text: 'Bánh mì đen/nguyên cám, nhân ực gà nướng móc mật hoặc xá xíu nạc.', tags: ['HG'] },
    planB: { text: 'Móc bớt ruột phần thân bánh trước khi nhét nhân.', tags: ['HB'] }
  },
  {
    id: 'f19',
    name: 'Pizza',
    group: 'Bữa Chính (Food delivery)',
    vibe: 'Béo/Mặn',
    tags: ['Nóng'],
    easyWin: { text: 'Chọn đế mỏng (thin crust) thay đế nướng phồng dày cộm.', tags: ['SB'] },
    smartUpgrade: { text: 'Topping nạc (gà/nấm/hải sản) thay vì pepperoni ngậm đầy mỡ ẩn.', tags: ['HG'] },
    planB: { text: 'Ăn 1 lát, chấm dứt bằng 1 cốc Salad giấm bự chảng phía bên.', tags: ['HB'] }
  },
  {
    id: 'f20',
    name: 'Burger + Khoai chiên',
    group: 'Bữa Chính (Food delivery)',
    vibe: 'Béo/Giòn',
    tags: ['Giòn', 'Nóng'],
    easyWin: { text: 'Nhân bò nạc, không kẹp lộn xộn bacon tẩm xốt béo.', tags: ['SB'] },
    smartUpgrade: { text: 'Đổi khoai chiên thành Salad hoặc Khoai lang nướng nguyên vỏ thái thỏi.', tags: ['HG'] },
    planB: { text: 'Mở hất bỏ nắp trên bánh burger (bánh mì vỏ trên), chia khoai cho người khác.', tags: ['EH'] }
  },

  // Category 5: Tiệc tùng / Ăn đêm (Quản trị rủi ro cao)
  {
    id: 'f21',
    name: 'Lẩu',
    group: 'Tiệc / Ăn Đêm (Rủi ro cao)',
    vibe: 'Nóng/Ăn lâu',
    tags: ['Nóng'],
    easyWin: { text: 'Nguyên tắc nhúng: Rau, Nấm, Đạm (Bò ức / Hải sản / Đậu) luôn lên thớt trước.', tags: ['HB', 'HG'] },
    smartUpgrade: { text: 'Lẩu nước thanh (nấm/riêu cua) thay Tứ Xuyên. Chấm mắm ớt dầm hạt nêm thay vì sốt BBQ vừng mập béo.', tags: ['HG'] },
    planB: { text: 'Vớt tất cả vào đúng 1 bát tô nhỏ của mình, cắm mặt chậm rãi giải quyết thay vì cứ húp ở nồi lẩu lớn.', tags: ['HB'] }
  },
  {
    id: 'f22',
    name: 'BBQ / Đồ Nướng',
    group: 'Tiệc / Ăn Đêm (Rủi ro cao)',
    vibe: 'Đậm/Béo',
    tags: ['Nóng'],
    easyWin: { text: 'Ưu tiên hải sản (tôm, mực, hàu) hoặc bò lõi rùa gân nạc thăn.', tags: ['HB', 'EH'] },
    smartUpgrade: { text: 'Luôn dùng kỹ thuật cuốn: Bọc 1 miếng thịt trong lá xà lách tươi lớn + kim chi lạnh để tản mùi.', tags: ['SB', 'HG'] },
    planB: { text: 'Kéo vạch giới hạn nướng xong lấy nước/trà lạnh giải nghén ngay.', tags: ['SB', 'EH'] }
  },
  {
    id: 'f23',
    name: 'Thèm đồ mặn khuya (Mì / Cơm)',
    group: 'Tiệc / Ăn Đêm (Rủi ro cao)',
    vibe: 'Nóng/Đậm',
    tags: ['Nóng', 'Dai'],
    easyWin: { text: 'Trứng hấp (Chawanmushi): Dùng 2 quả trứng hấp lỏng nước - Mịn ngon ấm người mà ít calo insulin cao.', tags: ['HB', 'EH'] },
    smartUpgrade: { text: 'Súp Miso rong biển đậu non: Trích xuất umami ngon xoa dịu thần kinh dạ dày cực khỏe vào nửa đêm.', tags: ['HG'] },
    planB: { text: 'Chải răng hóng điều hòa làm lạnh cơ thể (Hack tín hiệu thần kinh tắt cơn thèm khát thức đói).', tags: ['SB', 'EH'] }
  },
  {
    id: 'f24',
    name: 'Thèm bánh ngọt / bim bim khuya',
    group: 'Tiệc / Ăn Đêm (Rủi ro cao)',
    vibe: 'Ngọt/Béo',
    tags: ['Ngọt', 'Giòn'],
    easyWin: { text: 'Táo cắt lát chấm lướt xíu bơ đậu phộng mỏng cho đã cơn ngứa răng.', tags: ['EH'] },
    smartUpgrade: { text: '1-2 lát siêu mỏng Chocolate đen thuần cacao nguyên chất (70-80%) ngậm cho tan sệt nếm trong cuống hàm.', tags: ['HG'] },
    planB: { text: 'Uống 1-2 ly nước ấm pha chút dấm táo nhẹ trước để xem dạ dày chỉ đang khát nước thay vì thèm ăn không?', tags: ['HB'] }
  }
];

export const DAILY_PLANS = {
  TEENS: [
    { meal: 'Bữa sáng', time: '06:30', original: 'Phở bò rằn (nước béo, nhiều bánh)', originalKcal: 550, swapId: 'f15' },
    { meal: 'Bữa phụ sáng', time: '09:30', original: 'Sữa Milo / Snack bịch', originalKcal: 250, swapId: 'f1' },
    { meal: 'Bữa trưa', time: '12:00', original: 'Cơm tấm sườn mỡ', originalKcal: 700, swapId: 'f12' },
    { meal: 'Bữa phụ chiều', time: '15:30', original: 'Trà sữa trân châu full topping', originalKcal: 450, swapId: 'f5' },
    { meal: 'Bữa tối', time: '19:00', original: 'Gà rán & Khoai tây chiên', originalKcal: 850, swapId: 'f2' },
    { meal: 'Bữa khuya (học bài)', time: '22:30', original: 'Mì gói / Bánh quy ngọt', originalKcal: 400, swapId: 'f17' },
  ],
  ADULTS: [
    { meal: 'Bữa sáng', time: '07:30', original: 'Bánh mì thịt ngập xốt/pate', originalKcal: 500, swapId: 'f18' },
    { meal: 'Bữa phụ sáng', time: '10:00', original: 'Cà phê sữa đá / Bạc xỉu nhiều sữa', originalKcal: 250, swapId: 'f7' },
    { meal: 'Bữa trưa (văn phòng)', time: '12:30', original: 'Cơm rang thập cẩm', originalKcal: 750, swapId: 'f13' },
    { meal: 'Bữa phụ chiều (đồng nghiệp order)', time: '15:30', original: 'Trà sữa trân châu', originalKcal: 450, swapId: 'f5' },
    { meal: 'Bữa tối', time: '19:30', original: 'Lẩu hải sản hoặc BBQ nhậu nhẹt', originalKcal: 900, swapId: 'f21' },
    { meal: 'Bữa khuya (xem phim)', time: '22:30', original: 'Khoai tây chiên / Bim bim', originalKcal: 350, swapId: 'f1' },
  ]
};

export const PHENOTYPE_EXPLANATION: Record<Phenotype, {name: string, description: string, strategy: string}> = {
  HB: {
    name: 'Hungry Brain',
    description: 'Não bộ khó nhận tín hiệu no, dễ "ăn hết cho xong", cần cảm giác thỏa mãn về khối lượng.',
    strategy: 'Ưu tiên thể tích lớn (crowding-out): ăn nhiều rau, canh, các món nhiều nước để lấp đầy dạ dày mà không dư năng lượng.'
  },
  HG: {
    name: 'Hungry Gut',
    description: 'Dạ dày tiêu hóa nhanh, nhanh đói lại hoặc thấy "hụt hơi", cần thức ăn tiêu hóa chậm.',
    strategy: 'Ưu tiên no lâu: tăng đạm (trứng, thịt nạc, sữa chua, đậu), tăng chất xơ đặc, giảm đồ uống nhiều đường.'
  },
  EH: {
    name: 'Emotional Hunger',
    description: 'Ăn uống theo cảm xúc: vui, buồn, stress, chán nản thay vì đói sinh lý.',
    strategy: 'Ưu tiên giữ "vibe" + giảm hại: swap đồ ăn cùng nhóm để giữ cảm giác, kết hợp "nhịp dừng 60 giây" trước khi lấy thêm.'
  },
  SB: {
    name: 'Slow Burn',
    description: 'Lối sống ít vận động, công việc ngồi nhiều, tốc độ chuyển hoá chậm.',
    strategy: 'Swap "vừa đủ" năng lượng + gợi ý thêm vận động nhỏ (ví dụ: 5–10 phút đi bộ sau ăn).'
  },
  MIXED: {
    name: 'Mixed Profile',
    description: 'Mô hình lai, bạn có nhiều yếu tố kết hợp.',
    strategy: 'Lựa chọn chiến lược tuỳ vào hoàn cảnh thực tế. Thử kết hợp Easy Win cho ngày bận rộn và Smart Upgrade khi có lựa chọn.'
  }
};

export const TEXTURE_EXPLANATION: Record<Texture, {name: string, suggestion: string}> = {
  CRUNCHY: {
    name: 'Giòn rôm rốp',
    suggestion: 'Giữ cảm giác nhai: bỏng ngô không bơ, đậu gà rang, edamame rang, rau củ que + chấm sữa chua.'
  },
  CREAMY: {
    name: 'Mềm mịn béo',
    suggestion: 'Giữ kết cấu mượt: sữa chua Hy Lạp + trái cây, pudding chia ít đường, sinh tố ít đường + thêm đạm.'
  },
  CHEWY: {
    name: 'Dai nhai lâu',
    suggestion: 'Giữ độ dai: thạch không đường, sương sáo, nho đông lạnh, trái cây sấy ít đường (k/s phần), yogurt topping dai.'
  },
  HOT_SAVORY: {
    name: 'Nóng & đậm đà',
    suggestion: 'Chuẩn vị mặn nồng: canh/miến/phở phiên bản "nhiều rau - nhiều đạm - ít tinh bột".'
  }
};
