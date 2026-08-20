import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('research','legal-support-exception-aging-patterns-research');
export default function Page(){return renderAug19Article('research','legal-support-exception-aging-patterns-research')}
