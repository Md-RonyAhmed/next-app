import Link from 'next/link'
import React from 'react'

const ReviewsPage = () => {
  return (
    <>
    <div>ReviewsPage</div>
    <div className="flex flex-col gap-4 underline">
        <Link href="/products/1">Product 1</Link>
        <Link href="/products/2">Product 2</Link>
        <Link href="/products/3">Product 3</Link>
      </div>
    </>
  )
}

export default ReviewsPage