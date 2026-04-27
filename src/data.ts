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
  {
    id: 'f1',
    name: 'Khoai tây chiên / Bim bim',
    group: 'Snack giòn/mặn',
    vibe: 'Giòn',
    tags: ['Giòn'],
    easyWin: { text: 'Bỏng ngô không bơ (ít muối)', tags: ['HB', 'EH'] },
    smartUpgrade: { text: 'Đậu gà rang giòn (ít muối)', tags: ['HG', 'HB'], calorieReduction: 'Giảm ~ 150 - 200 kcal' },
    planB: { text: 'Vẫn ăn khoai chiên nhưng đổ ra chén nhỏ + thêm dưa leo/cà rốt que', tags: ['HB'] }
  },
  {
    id: 'f2',
    name: 'Gà rán',
    group: 'Snack giòn/mặn',
    vibe: 'Giòn/Nóng',
    tags: ['Giòn', 'Nóng'],
    easyWin: { text: 'Gà rán + thêm salad/rau/canh', tags: ['HB'] },
    smartUpgrade: { text: 'Gà nướng/áp chảo + salad', tags: ['HG', 'SB'], calorieReduction: 'Giảm ~ 250 - 350 kcal' },
    planB: { text: 'Phần nhỏ + nước không đường', tags: ['EH'] }
  },
  {
    id: 'f3',
    name: 'Nem chua rán',
    group: 'Snack giòn/mặn',
    vibe: 'Giòn',
    tags: ['Giòn'],
    easyWin: { text: 'Chia phần + ăn kèm dưa leo/rau sống', tags: ['HB'] },
    smartUpgrade: { text: 'Trứng luộc + rau củ que + chấm sữa chua', tags: ['HG'], calorieReduction: 'Giảm ~ 200 kcal' },
    planB: { text: 'Chọn 1 xiên + thêm 1 ly nước lọc trước khi ăn', tags: ['EH'] }
  },
  {
    id: 'f4',
    name: 'Bánh tráng trộn',
    group: 'Snack giòn/mặn',
    vibe: 'Dai/mặn/cay',
    tags: ['Dai'],
    easyWin: { text: '"Bánh tráng trộn phiên bản nhỏ" + thêm xoài/rau răm nhiều hơn', tags: ['EH'] },
    smartUpgrade: { text: 'Gỏi cuốn (tôm/thịt nạc) - chấm vừa', tags: ['HG'], calorieReduction: 'Giảm ~ 100 - 150 kcal' },
    planB: { text: 'Ăn chậm + để ly nước bên cạnh, ngừng 60 giây giữa chừng', tags: ['EH'] }
  },
  {
    id: 'f5',
    name: 'Trà sữa trân châu',
    group: 'Đồ uống ngọt',
    vibe: 'Ngọt/Dai',
    tags: ['Ngọt', 'Dai', 'Uống'],
    easyWin: { text: '30–50% đường + half topping', tags: ['EH'] },
    smartUpgrade: { text: 'Sữa chua Hy Lạp + sương sáo + trái cây ít ngọt', tags: ['HG', 'EH'], calorieReduction: 'Giảm ~ 250 - 350 kcal' },
    planB: { text: 'Nước có ga không đường + 1 phần trái cây (nhỏ)', tags: ['EH'] }
  },
  {
    id: 'f6',
    name: 'Nước ngọt có đường',
    group: 'Đồ uống ngọt',
    vibe: 'Ngọt',
    tags: ['Ngọt', 'Uống'],
    easyWin: { text: 'Đổi sang size nhỏ - đá nhiều', tags: ['EH'] },
    smartUpgrade: { text: 'Nước ngọt không đường/trà trái cây không đường', tags: ['EH'], calorieReduction: 'Giảm ~ 150 - 200 kcal' },
    planB: { text: 'Uống nước lọc trước, rồi uống 1/2 lon', tags: ['HB', 'EH'] }
  },
  {
    id: 'f7',
    name: 'Cà phê sữa / Bạc xỉu',
    group: 'Đồ uống ngọt',
    vibe: 'Ngọt/Béo',
    tags: ['Ngọt', 'Uống'],
    easyWin: { text: 'Giảm sữa/giảm đường', tags: ['EH'] },
    smartUpgrade: { text: 'Cà phê đen + sữa ít béo hoặc sữa không đường', tags: ['SB', 'HG'], calorieReduction: 'Giảm ~ 80 - 120 kcal' },
    planB: { text: 'Giữ món nhưng kèm 1 món "no lâu" nhỏ (trứng luộc)', tags: ['HG'] }
  },
  {
    id: 'f8',
    name: 'Nước ép',
    group: 'Đồ uống ngọt',
    vibe: 'Ngọt',
    tags: ['Ngọt', 'Uống'],
    easyWin: { text: 'Ít đường - không sữa đặc', tags: ['EH'] },
    smartUpgrade: { text: 'Sinh tố xay nguyên quả + sữa chua (tăng đạm/xơ)', tags: ['HG'], calorieReduction: 'Giữ kcal nhưng giảm đường máu rác' },
    planB: { text: 'Uống - ăn kèm 1 nắm hạt nhỏ', tags: ['HG'] }
  },
  {
    id: 'f9',
    name: 'Kem',
    group: 'Món ngọt tráng miệng',
    vibe: 'Béo/Mềm/Lạnh',
    tags: ['Ngọt'],
    easyWin: { text: 'Chọn 1 viên nhỏ', tags: ['EH'] },
    smartUpgrade: { text: 'Sữa chua Hy Lạp để lạnh + quả mọng', tags: ['HG'], calorieReduction: 'Giảm ~ 150 - 250 kcal' },
    planB: { text: 'Kem + thêm trái cây (tăng khối lượng, giảm "ăn thêm")', tags: ['HB'] }
  },
  {
    id: 'f10',
    name: 'Chè',
    group: 'Món ngọt tráng miệng',
    vibe: 'Ngọt',
    tags: ['Ngọt'],
    easyWin: { text: 'Xin ít nước cốt dừa/ít đường', tags: ['EH'] },
    smartUpgrade: { text: 'Chè ít đường + thêm đậu dồi dào chất xơ', tags: ['HG'], calorieReduction: 'Giảm ~ 100 - 150 kcal' },
    planB: { text: 'Chia đôi phần với bạn', tags: ['HB', 'EH'] }
  },
  {
    id: 'f11',
    name: 'Bánh ngọt',
    group: 'Món ngọt tráng miệng',
    vibe: 'Ngọt/Béo',
    tags: ['Ngọt'],
    easyWin: { text: 'Chọn phần nhỏ', tags: ['EH'] },
    smartUpgrade: { text: 'Bánh nguyên cám ít ngọt + ly sữa không đường', tags: ['HG'], calorieReduction: 'Giảm ~ 150 - 200 kcal' },
    planB: { text: 'Ăn sau bữa chính (không ăn lúc đói)', tags: ['HG', 'EH'] }
  },
  {
    id: 'f12',
    name: 'Cơm tấm sườn bì chả',
    group: 'Cơm - món Việt',
    vibe: 'Mặn/đậm',
    tags: ['Nóng'],
    easyWin: { text: 'Xin thêm dưa leo/đồ chua/rau + canh', tags: ['HB'] },
    smartUpgrade: { text: 'Giảm 1/2 cơm + tăng thịt nạc/trứng + nhiều rau', tags: ['HG'], calorieReduction: 'Giảm ~ 200 - 300 kcal' },
    planB: { text: 'Ăn theo thứ tự: canh/rau -> đạm -> cơm', tags: ['HB', 'HG'] }
  },
  {
    id: 'f13',
    name: 'Cơm rang',
    group: 'Cơm - món Việt',
    vibe: 'Đậm/dễ quá tay',
    tags: ['Nóng'],
    easyWin: { text: 'Thêm canh/rau luộc', tags: ['HB'] },
    smartUpgrade: { text: 'Cơm rang "ít cơm" + thêm trứng/rau', tags: ['HG'], calorieReduction: 'Giảm ~ 250 kcal' },
    planB: { text: 'Xin phần nhỏ - không gọi thêm topping chiên/xúc xích', tags: ['EH'] }
  },
  {
    id: 'f14',
    name: 'Cơm gà',
    group: 'Cơm - món Việt',
    vibe: 'Mặn',
    tags: ['Nóng'],
    easyWin: { text: 'Bỏ da - thêm rau', tags: ['SB', 'HG'] },
    smartUpgrade: { text: 'Giảm 1/2 cơm + thịt gà nạc + canh xúp', tags: ['HG'], calorieReduction: 'Giảm ~ 200 - 250 kcal' },
    planB: { text: 'Ăn gà trước rồi mới ăn cơm', tags: ['HG'] }
  },
  {
    id: 'f15',
    name: 'Phở',
    group: 'Bún/phở/mì',
    vibe: 'Nóng/đậm',
    tags: ['Nóng'],
    easyWin: { text: 'Xin nhiều giá/rau - ít bánh phở', tags: ['HB'] },
    smartUpgrade: { text: 'Tăng lượng thịt nạc - giảm 1/2 bánh phở - nước trong', tags: ['HG'], calorieReduction: 'Giảm ~ 100 - 150 kcal' },
    planB: { text: 'Ăn chậm, dừng 1 phút rồi quyết định có ăn tiếp không', tags: ['HB'] }
  },
  {
    id: 'f16',
    name: 'Bún bò',
    group: 'Bún/phở/mì',
    vibe: 'Nóng/đậm',
    tags: ['Nóng'],
    easyWin: { text: 'Nhiều rau, giảm bún 1/3', tags: ['HB'] },
    smartUpgrade: { text: 'Tăng thịt nạc - bỏ bớt giò/chả mỡ và nước béo', tags: ['HG'], calorieReduction: 'Giảm ~ 150 - 250 kcal' },
    planB: { text: 'Gọi suất nhỏ', tags: ['EH'] }
  },
  {
    id: 'f17',
    name: 'Mì gói',
    group: 'Bún/phở/mì',
    vibe: 'Mặn/béo',
    tags: ['Nóng'],
    easyWin: { text: 'Thêm rau + trứng', tags: ['HG'] },
    smartUpgrade: { text: 'Dùng 1/2 gói nêm - thêm nấm/rau/đậu hũ nạc', tags: ['SB', 'HG'], calorieReduction: 'Giảm Natri và Calo chất béo bão hòa' },
    planB: { text: 'Nếu ăn khuya: ăn 1/2 phần - uống nước ấm trước', tags: ['EH'] }
  },
  {
    id: 'f18',
    name: 'Bánh mì thịt',
    group: 'Bánh mì - fast food',
    vibe: 'Giòn/đậm',
    tags: ['Giòn'],
    easyWin: { text: 'Giảm pate/xốt béo - thêm dưa leo/rau', tags: ['SB'] },
    smartUpgrade: { text: '1/2 ổ bánh mì + thêm trứng luộc/thịt nạc kẹp nhiều rau', tags: ['HG'], calorieReduction: 'Giảm ~ 150 - 200 kcal' },
    planB: { text: 'Ăn kèm canh hoặc nước (nếu có) để nhanh no', tags: ['HB'] }
  },
  {
    id: 'f19',
    name: 'Pizza',
    group: 'Bánh mì - fast food',
    vibe: 'Béo/mặn',
    tags: ['Nóng'],
    easyWin: { text: '2 lát + gọi thêm 1 phần salad lớn', tags: ['HB'] },
    smartUpgrade: { text: 'Chọn topping nạc/đạm - ít xốt béo', tags: ['SB', 'HG'], calorieReduction: 'Giảm ~ 200 - 300 kcal / bữa' },
    planB: { text: 'Ăn chậm, dừng ở lát thứ 2 rồi quyết định tiếp', tags: ['HB'] }
  },
  {
    id: 'f20',
    name: 'Hamburger + khoai chiên',
    group: 'Bánh mì - fast food',
    vibe: 'Béo/giòn',
    tags: ['Giòn'],
    easyWin: { text: 'Đổi khoai chiên sang salad/trái cây', tags: ['SB'] },
    smartUpgrade: { text: 'Burger 1 miếng thịt nạc - bỏ xốt béo - thêm nhiều rau', tags: ['HG'], calorieReduction: 'Giảm ~ 300 - 400 kcal (nếu bỏ khoai)' },
    planB: { text: 'Giữ combo nhưng chia sẻ khoai chiên cho bạn bè', tags: ['EH'] }
  },
  {
    id: 'f21',
    name: 'Lẩu',
    group: 'Lẩu/nướng/tiệc',
    vibe: 'Nóng/ăn lâu',
    tags: ['Nóng'],
    easyWin: { text: 'Ăn nhiều rau/nấm và đạm nạc trước', tags: ['HB', 'HG'] },
    smartUpgrade: { text: 'Hạn chế đồ viên công nghiệp lẩu/đồ chiên - chọn hải sản/đậu đậu', tags: ['HG'], calorieReduction: 'Giảm rất nhiều chất béo ẩn' },
    planB: { text: '"Nguyên tắc 1 đĩa": Gắp 1 đĩa nhỏ rồi đợi 5 phút', tags: ['HB'] }
  },
  {
    id: 'f22',
    name: 'BBQ/nướng',
    group: 'Lẩu/nướng/tiệc',
    vibe: 'Đậm/béo',
    tags: ['Nóng'],
    easyWin: { text: 'Ăn kèm rau sống - cuốn nhiều rau thơm', tags: ['HB'] },
    smartUpgrade: { text: 'Chọn thịt tẩm ướp đơn giản/hải sản - hạn chế xốt phô mai ngọt', tags: ['SB', 'HG'], calorieReduction: 'Giảm ~ 200 - 300 kcal xốt' },
    planB: { text: 'Uống nước lọc xen kẽ - tránh gọi thêm món chiên', tags: ['EH'] }
  },
  {
    id: 'f23',
    name: 'Thèm mì - đồ mặn lúc khuya',
    group: 'Ăn khuya',
    vibe: 'Nóng/đậm',
    tags: ['Nóng', 'Dai'],
    easyWin: { text: 'Chỉ ăn rau/trứng/đậu - hạn chế tinh bột', tags: ['HG'] },
    smartUpgrade: { text: 'Sữa chua không đường - một miếng trái cây ít ngọt (rất nhẹ bụng)', tags: ['EH'], calorieReduction: 'Giảm ~ 250 kcal' },
    planB: { text: 'Nếu ăn mì: ăn 1/2 phần - không uống quá nhiều nước dùng do mặn', tags: ['SB', 'EH'] }
  },
  {
    id: 'f24',
    name: 'Bánh quy/chocolate lúc khuya',
    group: 'Ăn khuya',
    vibe: 'Ngọt',
    tags: ['Ngọt', 'Giòn'],
    easyWin: { text: 'Bẻ 1 phần nhỏ - cất hết hộp đi chỗ khác', tags: ['HB'] },
    smartUpgrade: { text: 'Sữa ấm không đường', tags: ['EH'], calorieReduction: 'Giảm ~ 200 kcal' },
    planB: { text: 'Đánh răng sớm kết hợp ly nước ấm (gửi tín hiệu kết thúc ăn uống)', tags: ['EH'] }
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
