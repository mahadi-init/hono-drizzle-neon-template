type User = {
	id: string;
	email: string;
	emailVerified: boolean;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	image?: string | null | undefined | undefined;
} | null;

type Session = {
	id: string;
	userId: string;
	expiresAt: Date;
	createdAt: Date;
	updatedAt: Date;
	token: string;
	ipAddress?: string | null | undefined | undefined;
	userAgent?: string | null | undefined | undefined;
} | null;

export type Variables = {
	user: User;
	session: Session;
};
