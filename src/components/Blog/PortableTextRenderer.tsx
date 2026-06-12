import { PortableText } from '@portabletext/react'
import { urlFor } from '../../lib/sanityImage'
import type { JSX } from 'react'

interface Props {
  value: any[]
}

const components = {
  types: {
    image: ({ value }: { value: any }) => (
      <figure className="my-8">
        <img
          src={urlFor(value).width(900).url()}
          alt={value.alt || ''}
          className="w-full rounded-sm"
          loading="lazy"
        />
        {value.alt && (
          <figcaption className="text-sm text-center mt-2" style={{ color: '#75665F' }}>
            {value.alt}
          </figcaption>
        )}
      </figure>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: '#6F5141' }}>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#6F5141' }}>{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg leading-relaxed mb-5" style={{ color: '#2F2521' }}>{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote
        className="border-l-4 pl-5 my-8 italic text-lg"
        style={{ borderColor: '#AE9380', color: '#75665F' }}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong style={{ color: '#2F2521' }}>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        style={{ color: '#6F5141', textDecoration: 'underline' }}
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-5 space-y-2" style={{ color: '#2F2521' }}>{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-5 space-y-2" style={{ color: '#2F2521' }}>{children}</ol>
    ),
  },
}

const PortableTextRenderer = ({ value }: Props): JSX.Element => {
  return <PortableText value={value} components={components} />
}

export default PortableTextRenderer
