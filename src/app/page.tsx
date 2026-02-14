import React from 'react'
import { getSkills } from '../lib/hygraph.server';
import AboutClient from './AboutClient';

export const revalidate = 3600;

export default async function AboutPage() {
	const skills = await getSkills();

	return <AboutClient skills={skills} />
}
