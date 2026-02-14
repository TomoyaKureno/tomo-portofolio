import React from 'react'
import { getSkills, getTechnologies } from '../lib/hygraph.server';
import AboutClient from './AboutClient';

export const revalidate = 3600;

export default async function AboutPage() {
	const skills = await getSkills();
	const technologies = await getTechnologies();

	return <AboutClient skills={skills} technologies={technologies} />
}
