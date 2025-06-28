import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb';


const ContactLink = () => {
  return (
    <div className='flex items-center gap-2'>
        <Breadcrumb >
        <BreadcrumbList>
            <BreadcrumbItem className='text-black font-bold'>
            <BreadcrumbLink href='/' >Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink href='/contact-us'>Contact</BreadcrumbLink>
            </BreadcrumbItem>

            </BreadcrumbList>

        </Breadcrumb>
    </div>
  )
}

export default ContactLink