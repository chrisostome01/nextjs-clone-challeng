export default function Button({ label , style , onclick  }){
    return(
        <button onClick={onclick} className={`bg-zinc-700 text-white px-5 py-2 rounded-full w-fit cursor-pointer ${style} `}>
            { label }
        </button>
    )
}

export function ButtonSecondary({ label , style, onclick }){
    return(
        <button onClick={onclick} className={`bg-white text-dark-100 border border-dark-100 px-5 py-2 rounded-full w-fit cursor-pointer ${style} `}>
            { label }
        </button>
    )
}
