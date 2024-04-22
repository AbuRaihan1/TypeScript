"use strict";
{
    // nullish coalescing
    // nullish coalescing হলো, null এবং undefined এর উপর ভিত্তি করে কন্ডিশেনালি কাজ করে। অনেকটা ternery অপারেটর এর মতো। তবে, টার্নারি অপারেটর falsy value নিয়ে কাজ করে। আর nullish coalescing শুধু null এবং undefined নিয়ে কাজ করে।
    const foo = null !== null && null !== void 0 ? null : "default value";
    console.log(foo); // Output: 'default value'
    const bar = "some value" !== null && "some value" !== void 0 ? "some value" : "default value";
    console.log(bar); // Output: 'some value'
}
