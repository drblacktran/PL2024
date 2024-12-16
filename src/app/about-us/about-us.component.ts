import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {TitleComponent} from "../shared/title/title.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    TitleComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  sections = [
    {
      title: 'Lịch Sử Hình Thành',
      description:
        'Từ những ý tưởng được thành hình cuối năm 2018, Phiêu Linh bắt đầu hành trình của mình vào mùa hè năm 2019 tại trường Phổ thông Dân tộc Bán trú Sơn Sả Hồ, xã Hoàng Liên, tỉnh Lào Cai. Trải qua năm năm tồn tại, Phiêu Linh đã có những dấu ấn riêng của mình qua thông qua 5 mùa trại hè cùng các em học sinh tại Sa Pa và Tây Nguyên.',
    },
    {
      title: 'Sứ Mệnh',
      description:
        'Với sứ mệnh đồng hành và thấu cảm, mùa thứ 6 của Phiêu Linh tập trung vào quá trình phát triển nội tại của các em, thúc đẩy các em nuôi dưỡng giá trị bản thân và giá trị cộng đồng. Phiêu Linh sẽ dùng giáo dục như một “công cụ” đặt nền tảng dựa trên tình yêu, lòng trắc ẩn và sự chính trực để giúp trẻ em và thanh thiếu niên Việt Nam kết nối với bản thân và phát triển cộng đồng.',
    },
    {
      title: 'Mô Hình Hoạt Động',
      description:
        'Trại hè Phiêu Linh là một trại hè kỹ năng được tổ chức miễn phí cho các em học sinh người dân tộc thiểu số tại Sapa. Mặt khác, Dự án còn hy vọng rằng trại hè Phiêu Linh sẽ trở thành sân chơi bổ ích vào mỗi mùa hè cho các em học sinh tại Sapa nói chung và các em người dân tộc thiểu số nói riêng.',
    },
  ];
}
