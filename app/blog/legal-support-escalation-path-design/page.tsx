import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('blog','legal-support-escalation-path-design');
export default function Page(){return renderAug19Article('blog','legal-support-escalation-path-design')}
