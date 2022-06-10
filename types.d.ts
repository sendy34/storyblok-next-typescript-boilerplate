export interface Story {
    alternates?: Array<any>
    content?: {
        component?: string
        _uid?: string
        [key: string]: any
    }
    created_at?: string
    default_full_slug?: string
    first_published_at?: string
    full_slug?: string
    group_id?: string
    id?: string
    is_startpage?: boolean
    lang?: string
    meta_data?: any
    name?: string
    parent_id?: number
    path?: any
    position?: number
    published_at?: string
    release_id?: any
    slug?: string
    sort_by_date?: any
    tag_list?: Array<string>
    translated_slugs?: Array<any>
    uuid?: string
}

export interface StoryblokContent {
    _uid: string
    _editable?: string
    component: string
    [key as string]: any
}

export type Blok = Array<StoryblokContent>
