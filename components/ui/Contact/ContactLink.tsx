import React from 'react'
// import CustomBreadcrumb from '../CustomBreadcrumb'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../Contact/breadcrumb"


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
        {/* <Breadcrumb
            items={[
                { label: "Home", href: "/" },
                { label: "Contact", href: "/contact-us" },
            ]}
        /> */}
    </div>
  )
}

export default ContactLink