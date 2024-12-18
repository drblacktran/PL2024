import { Component, Pipe, PipeTransform } from '@angular/core';
import {NgClass, NgForOf, NgStyle} from "@angular/common";
import {TitleComponent} from "../shared/title/title.component";
import {ShortenTextCharacterPipe} from "../../pipe/shorten-text-character.pipe";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    ShortenTextCharacterPipe,
    NgForOf,
    NgClass,
    TitleComponent,
    NgStyle
  ],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {

  news = [
    {
      "title": "Phiêu Linh Project: Ươm mầm học cho trẻ vùng cao",
      "date": "20/07/2023",
      "text": "Phiêu Linh Project là dự án với sự góp mặt của nhiều bạn trẻ Việt Nam khắp nơi, gồm cả du học sinh nhiều nước, với mục tiêu góp phần ươm mầm học cho trẻ vùng cao.",
      "link": "https://tuoitre.vn/phieu-linh-project-uom-mam-hoc-cho-tre-vung-cao-20230720112727122.htm",
      "image": "https://via.placeholder.com/300x200",
      animated: false
    },
    {
      "title": "The Phiêu Linh Project chính thức mở đơn tuyển",
      "date": "22/04/2021",
      "text": "The Phiêu Linh Project là một dự án được thành lập với mục tiêu sử dụng giáo dục chất lượng nhằm nâng cao nhận thức của học sinh về các vấn đề đang diễn ra tại địa phương cũng như phát huy tối đa khả năng sáng tạo của các em. Sáng lập dự án này là hai cô gái: Nguyễn Hoàng Phương Anh (sinh năm 1998) và Trần Ngọc Phương Duyên (sinh năm 1999).",
      "link": "https://svvn.tienphong.vn/du-an-the-phieu-linh-project-cua-hai-co-gai-tre-post1330237.tpo",
      "image": "https://via.placeholder.com/300x200",
      animated: false
    },
    {
      "title": "Dạy kỹ năng sống cho các em nhỏ vùng cao",
      "date": "08/10/2023",
      "text": "Có một dự án của người trẻ đã đồng hành, dạy kỹ năng sống cho các em nhỏ vùng cao trong 5 năm qua. Đó là dự án giáo dục The Phiêu Linh Project do Trần Ngọc Phương Duyên (24 tuổi, sống tại Mỹ) và Nguyễn Hoàng Phương Anh (25 tuổi, sống tại TP.HCM) đồng sáng lập.",
      "link": "https://thanhgiong.vn/day-ky-nang-song-cho-cac-em-nho-vung-cao-53251.html",
      "image": "https://via.placeholder.com/300x200",
      animated: false
    },
    {
      "title": "The Phiêu Linh Project quay lại Sa Pa cùng trại hè thực địa",
      "date": "18/04/2023",
      "text": "The Phiêu Linh Project là một tổ chức phi lợi nhuận được thành lập từ năm 2019 với sứ mệnh dùng giáo dục đặt nền tảng dựa trên tình yêu, lòng trắc ẩn và sự chính trực để giúp cộng đồng học sinh dân tộc thiểu số kết nối với bản thân và phát triển cộng đồng.",
      "link": "https://voh.com.vn/radio/sai-gon-fm/phat-trien-nong-nghiep-cong-nghe-cao-14230418000026723.html",
      "image": "https://via.placeholder.com/300x200",
      animated: false
    },
    {
      "title": "The Phiêu Linh Project: Giáo dục chất lượng cho học sinh",
      "date": "23/04/2021",
      "text": "The Phiêu Linh Project là một dự án được thành lập với mục tiêu sử dụng giáo dục chất lượng nhằm nâng cao nhận thức của học sinh về các vấn đề đang diễn ra tại địa phương cũng như phát huy tối đa khả năng sáng tạo của các em.",
      "link": "https://vietgiaitri.com/du-an-the-phieu-linh-project-cua-hai-co-gai-tre-20210423i5721633/",
      "image": "https://via.placeholder.com/300x200",
      animated: false
    },
    {
      "title": "Dạy kỹ năng sống cho trẻ em nhỏ vùng cao",
      "date": "08/10/2023",
      "text": "Có một dự án của người trẻ đã đồng hành, dạy kỹ năng sống cho các em nhỏ vùng cao trong 5 năm qua. Đó là dự án giáo dục The Phiêu Linh Project do Trần Ngọc Phương Duyên và Nguyễn Hoàng Phương Anh đồng sáng lập.",
      "link": "https://thanhnien.vn/day-ky-nang-song-cho-cac-em-nho-vung-cao-18523100717421208.htm",
      "image": "https://via.placeholder.com/300x200",
      animated: false
    }

    // Add more news here
  ];



  // Tracks expanded state of each card
  isExpanded: { [key: string]: boolean } = {};
  currentPage: number = 0;
  cardsPerPage: number = 3;
  totalPages: number = Math.ceil(this.news.length / this.cardsPerPage);

  toggleExpand(title: string): void {
    this.isExpanded[title] = !this.isExpanded[title];
  }

  get visibleCards() {
    const start = this.currentPage * this.cardsPerPage;
    return this.news.slice(start, start + this.cardsPerPage);
  }

  nextPage() {
    this.currentPage = (this.currentPage + 1) % this.totalPages; // Circular pagination

  }

  prevPage() {
    this.currentPage = (this.currentPage - 1 + this.totalPages) % this.totalPages;
  }

  getPaginationIndicator() {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }

  calculateAnimationDelay(index: number): string {
    return `${index * 0.3}s`; // Incremental delay for each card
  }
}
