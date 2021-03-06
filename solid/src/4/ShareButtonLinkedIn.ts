import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {
	constructor(clazz: string, url: string) {
		super(clazz, url);
	}

	createLink(): string {
		return `http://www.linkedin.com/shareArticle?mini=true&url=${this.url}`;
	}
}
