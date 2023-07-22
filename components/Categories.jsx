import React from 'react'
import Link from 'next/link'

const Categories = () => {
    const catg=[{name:'Self Love', slug:'self-love'},{name:'React Test', slug:'web-dev'}]
  return (
    <div>
      {catg.map((category)=>(
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className=''>{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories