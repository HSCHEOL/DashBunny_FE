"use client";

import Link from "next/link";
import { fetchCoupon, updateCouponStatus } from "@/lib/api"; // 상태 업데이트 API 추가
import { CouponType } from "@/types/types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Coupon = () => {
  const [coupons, setCoupons] = useState<CouponType[]>();
  const [loading, setLoading] = useState(true);
  const [couponID, setCouponID] = useState<null | number>(null);

  useEffect(() => {
    fetchCoupon().then((data) => {
      setCoupons(data);
      setLoading(false);
    });
  }, []);

  const expandCoupon = (couponId: number) => {
    setCouponID((prev) => (prev === couponId ? null : couponId));
  };

  const handleCouponStatusChange = async (
    couponId: number,
    newStatus: string
  ) => {
    try {
      await updateCouponStatus(couponId, newStatus);
      setCoupons((prevCoupons) =>
        prevCoupons?.map((coupon) =>
          coupon.couponId === couponId
            ? { ...coupon, couponStatus: newStatus }
            : coupon
        )
      );
    } catch (error) {
      console.error("쿠폰 상태 변경 실패:", error);
    }
  };

  const NavText = "w-1/4 font-semibold text-md text-center ";

  return (
    <>
      <section>
        <div className="flex items-center mb-5">
          <p className="font-semibold text-2xl ">전체 쿠폰</p>
          <p className="font-semibold text-2xl mx-3 text-BunnyOrange">
            {coupons?.length}
          </p>
          <p className="text-md text-gray-500 font-semibold">
            쿠폰 목록을 누르면 쿠폰의 상세 정보를 볼 수 있습니다.
          </p>
          <Link href="/coupon/create" className="ml-auto">
            <button className="border shadow w-40 p-2 rounded-xl font-semibold hover:bg-BunnyOrange transition-color transform duration-300 ease-in-out">
              쿠폰 생성하기
            </button>
          </Link>
        </div>
        <div className="border rounded-2xl min-h-[80vh] z-10 shadow-xl">
          <div className="w-full h-12 border-gray-300 rounded-t-2xl border-b-2 flex items-center justify-center p-5 bg-gray-50">
            <p className="font-semibold text-md text-center w-20">CouponID</p>
            <p className={NavText}>CouponName</p>
            <p className={NavText}>CouponDescription</p>
            <p className={NavText}>CouponType</p>
            <p className={NavText}>CouponStatus</p>
          </div>
          <main className="w-full">
            {loading ? (
              <div>로딩중입니다.</div>
            ) : (
              coupons &&
              coupons.map((value) => (
                <div key={value.couponId}>
                  <div
                    className={`flex w-full items-center justify-center p-5 border-b  ${
                      couponID === value.couponId ? "bg-red-100" : ""
                    } cursor-pointer transition hover:bg-red-100`}
                    onClick={() => expandCoupon(value.couponId)}
                  >
                    <p className="font-semibold text-md text-center w-20">
                      {value.couponId}
                    </p>
                    <p className={NavText}>{value.couponName}</p>
                    <p className={NavText}>{value.couponDescription}</p>
                    <p className={NavText}>
                      {value.couponType === "FirstCome"
                        ? "선착순 쿠폰"
                        : "일반 쿠폰"}
                    </p>
                    <p className="w-1/4 flex items-center justify-center">
                      {value.couponStatus === "ACTIVE" ? (
                        <div className="w-4 h-4 rounded-full bg-green-400 transition"></div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-red-600 transition"></div>
                      )}
                    </p>
                  </div>
                  {value.couponId === couponID && (
                    <motion.div
                      className="w-full p-5 border-b"
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                    >
                      <div className="flex items-center w-full justify-center bg-gray-100 p-1 border ">
                        <p className="text-2xl text-BunnyOrange font-bold">
                          {value.couponName}
                        </p>
                        <p className="text-xl font-bold mx-2">Coupon</p>
                      </div>
                      <div className="p-4 flex flex-col items-center justify-center border">
                        <div className="flex items-center justify-center gap-10 2xl:gap-40">
                          <div className="flex flex-col items-center justify-center">
                            <p className="font-bold text-sm 2xl:text-xl">
                              할인금액
                            </p>
                            <p className="text-sm 2xl:text-xl">
                              {value.discountPrice}
                            </p>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="font-bold text-sm 2xl:text-xl">
                              최소 주문 금액
                            </p>
                            <p className="text-sm 2xl:text-xl ">
                              {value.minOrderPrice}
                            </p>
                          </div>
                          <div className="flex flex-col items-center justify-center ">
                            <p className="font-bold text-sm 2xl:text-xl">
                              최대 주문 금액
                            </p>
                            <p className="text-sm 2xl:text-xl">
                              {value.maxIssuance}
                            </p>
                          </div>
                          <div className="flex flex-col items-center justify-center ">
                            <p className="font-bold text-sm 2xl:text-xl">
                              발급한도
                            </p>
                            <p className="text-sm 2xl:text-xl">
                              {value.maxIssuance}
                            </p>
                          </div>
                          <div className="flex flex-col items-center justify-center ">
                            <p className="font-bold text-sm 2xl:text-xl">
                              쿠폰 만료일
                            </p>
                            <p className="text-sm 2xl:text-xl">
                              {value.expiredDate}
                            </p>
                          </div>
                          <div className="flex flex-col items-center justify-center ">
                            <p className="font-bold text-sm 2xl:text-xl">
                              쿠폰 다운로드 시작일
                            </p>
                            <p className="text-sm 2xl:text-xl">
                              {value.downloadStartDate}
                            </p>
                          </div>
                          <div className="flex flex-col items-center justify-center border p-2 shadow-lg rounded-xl">
                            <p className="font-bold text-sm 2xl:text-xl">
                              쿠폰 상태
                            </p>
                            <select
                              className="border rounded-md p-2 text-sm mt-2 outline-BunnyOrange"
                              value={value.couponStatus}
                              onChange={(e) =>
                                handleCouponStatusChange(
                                  value.couponId,
                                  e.target.value
                                )
                              }
                            >
                              <option value="PENDING">PENDING</option>
                              <option value="ACTIVE">ACTIVE</option>
                              <option value="EARLY_TERMINATED">
                                EARLY_TERMINATED
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))
            )}
          </main>
        </div>
      </section>
    </>
  );
};

export default Coupon;
