import React from 'react'

export const EditPageCom = () => {
  return (
    <div>EditPageCom</div>
  )
}

export const InputField = () => {
  return (
    <div>InputField</div>
  )
}


export const Heading =({className , children}: {className?: string, children: React.ReactNode})=>{
    return (
        <p className={`text-3xl font-medium tracking-tight ${className}`}>{children}</p>
    )
}

export const Title =({className , children}: {className?: string, children: React.ReactNode})=>{
    return (
        <p className={`text-lg font-semibold text-muted-foreground ${className}`}>{children}</p>
    )
}

export const InputBox =({className , ...props}: React.InputHTMLAttributes<HTMLInputElement> & {className?: string})=>{
    return (
        <input className={`border border-gray-300 px-2 py-1 rounded-md  ${className}`} {...props} />
    )
}

export const TextAreaBox =({className , ...props}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {className?: string})=>{
    return (
        <textarea className={`border border-gray-300 px-2 py-1 rounded-md  ${className}`} {...props} />
    )
}
