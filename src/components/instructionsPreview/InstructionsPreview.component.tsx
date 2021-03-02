import { FunctionComponent, useEffect } from 'react';

import marked from 'marked';

interface InstructonsPreviewProps {
    instructions: string;
}

const InstructionsPreview: FunctionComponent<InstructonsPreviewProps> = ({
    instructions,
}) => {
    useEffect(() => {
        document.getElementById('instructionsPreview').innerHTML = marked(
            instructions
        );
    }, []);

    return <div id="instructionsPreview" />;
};

export default InstructionsPreview;
