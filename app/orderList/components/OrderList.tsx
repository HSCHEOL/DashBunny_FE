"use client"

import Divider from "@/components/common/Divider"
import { useGetWishList } from "../hooks/useGetOrderList"
import OrderCard from "./OrderCard"

export default function OrderList() {
  const { data: orderList, isError, isLoading } = useGetWishList()
  if (isLoading) {
    return <div>로딩중...</div>
  }
  if (isError) {
    return <div>에러가 발생했습니다.</div>
  }
  if (!orderList) {
    return <div>주문내역이 없습니다.</div>
  }
  return (
    <section className=" mt-4">
      {orderList!.map((order, index) => (
        <div key={index}>
          <OrderCard key={index} {...order} />
          <Divider />
        </div>
      ))}
    </section>
  )
}
