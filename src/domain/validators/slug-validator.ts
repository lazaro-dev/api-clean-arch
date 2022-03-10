export function valid(slug: string)
{
    const regex = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/
    return regex.test(slug)
}