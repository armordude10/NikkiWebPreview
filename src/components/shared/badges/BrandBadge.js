import Image from "next/image";
import Link from "next/link";
import brandBadgeImage from "@/assets/img/footer/brand__badge.png";
import brandBadgeImage1 from "@/assets/img/herobaner/hero__badge_1.png";
import brandBadgeInnerImage from "@/assets/img/pre.png";
const BrandBadge = ({ type, badge }) => {
  return (
    <div
      className={`bastun__brand__badge ${
        type === "footer" ? "bastun__brand__badge__footer" : ""
      } `}
    >
      <div className="bastun__brand__badge__inner position-relative">
        <Link href="/">
          <Image
            className="bbb__animate"
            src={badge ? brandBadgeImage1 : brandBadgeImage}
            alt={`${type === "footer" ? "Footer" : "Hero"}  badge`}
            width={150}
            height={150}
          />
          <Image
            className="bbb__icon"
            src={brandBadgeInnerImage}
            alt={`${type === "footer" ? "Footer" : "Hero"}  badge icon`}
            width={60}
            height={60}
          />
        </Link>
      </div>
    </div>
  );
};

export default BrandBadge;
