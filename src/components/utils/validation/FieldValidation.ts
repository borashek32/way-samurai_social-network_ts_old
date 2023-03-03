export const required = (value: string) => {
  if (value) return undefined
  return "Field is required"
}

export const minLengthCreator = (minLength: number) => (value: string) => {
  if (value.length > minLength) return undefined
  return `Min length is ${minLength} symbols`
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if (value.length < maxLength) return undefined
  return `Max length is ${maxLength} symbols`
}
