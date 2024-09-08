export interface BackgroundImage {
    title: string;
    url: string;
}

export interface AboutMePageData {
    pageTitlePart1: string;
    pageTitlePart2: string;
    bookVisitButton: string;
    bookVisitLink: string;
    bookVisitTitle: string;
    bookVisitContent: { raw: string };
    introductionContent: { raw: string };
    introductionTitle: string;
    longDescriptionContent: { raw: string };
    longDescriptionTitle: string;
    personImg: BackgroundImage;
    backgroundImg: BackgroundImage;
}

export interface ContactPageData {
    backgroundImg: BackgroundImage;
    firstNameField: string;
    emailField: string;
    lastNameField: string;
    messageField: string;
    submitButtonText: string;
    pageTitle: string;
    formTitle: string;
    contactImg: BackgroundImage;
    bookVisitButton: string;
    bookVisitLink: string;
    bookVisitTitle: string;
    bookVisitContent: { raw: string };
}

export interface BlogPostPreviewData {
    slug: string;
    lastTxt?: string;
    lastArrowImg: BackgroundImage;
    lastSlug?: string;
    title: string;
    description: string;
    author: string;
    date: string;
    readingTime: number;
    backgroundImg: BackgroundImage;
    likesNr: number;
    type?: string;
    content?: string;
}

export interface BlogPostData {
    node: {
        author: string;
        backgroundImg: BackgroundImage;
        date: string;
        description: string;
        likesNr: number;
        readingTime: number;
        title: string;
        category: string;
        slug: string;
        type?: string;
    };
}

export interface WeeklyPickData {
    node: {
        songTitle: string;
        artist: string;
        link: string;
        backgroundImg: BackgroundImage;
    };
}

export interface SocialIconData {
    node: {
        img: BackgroundImage;
        title: string;
        link: string;
    };
}

export interface ColumnData {
    title: string;
    backgroundImg: BackgroundImage;
    type: string;
    order: number;
}
