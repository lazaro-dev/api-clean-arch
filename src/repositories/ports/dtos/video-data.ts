export interface VideoData {
    id?: string
    url: string
    filename: string
    desc: string | null
    title: string
    slug: string
    screenplay: string | null
    created_at?: Date
    update_at?: Date
}