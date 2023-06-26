

interface DocumentProps {
  title: string;
  url: string;
 
  color:string,
}


export const Documentation = ({ title, url, color }: DocumentProps) => {
  return (
    <div className=''>
      <a href={url}>
        <div className='w-60 p-3 gap-1 items-center flex flex-row  border border-solid shadow-sm rounded-lg hover:cursor-pointer '>
          <div>
          <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="0.5" width="35" height="35" rx="17.5" fill={color+"1A"}/>
<path d="M19.3333 9.66699H13.4999C13.0579 9.66699 12.634 9.84259 12.3214 10.1551C12.0088 10.4677 11.8333 10.8916 11.8333 11.3337V24.667C11.8333 25.109 12.0088 25.5329 12.3214 25.8455C12.634 26.1581 13.0579 26.3337 13.4999 26.3337H23.4999C23.9419 26.3337 24.3659 26.1581 24.6784 25.8455C24.991 25.5329 25.1666 25.109 25.1666 24.667V15.5003M19.3333 9.66699L25.1666 15.5003M19.3333 9.66699V15.5003H25.1666" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="1" y="0.5" width="35" height="35" rx="17.5" stroke={color}/>
</svg>

          </div>
          <div className='font-normal  text-base leading-normal '>
            <p>{title}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Documentation

