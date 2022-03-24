import React, { useCallback, useEffect } from 'react'
import useCodeMirror from './use-codemirror'

interface Props {
  initialDoc: string
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = props => {
  const { onChange, initialDoc } = props
  const handleChange = useCallback(
    state => onChange(state.doc.toString()),
    [onChange]
  )
  const [refContainer, editorview] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange,
  })
  useEffect(() => {
    if (editorview) {
    }
  }, [editorview])

  return (
    <div className="editor-wrapper" ref={refContainer}>
      Editor
    </div>
  )
}

export default Editor
