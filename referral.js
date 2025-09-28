document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copyButton');
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            const referralLinkInput = document.getElementById('referralLink');
            const copyButtonText = document.getElementById('copyButtonText');
            
            // Select the text in the input field
            referralLinkInput.select();
            // For mobile devices, a more robust selection
            referralLinkInput.setSelectionRange(0, 99999); 
            
            navigator.clipboard.writeText(referralLinkInput.value).then(() => {
                copyButtonText.textContent = 'Copied!';
                copyButton.style.backgroundColor = '#2a8c45'; // Darker Green
                
                setTimeout(() => {
                    copyButtonText.textContent = 'Copy';
                    copyButton.style.backgroundColor = 'var(--secondary-color)';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                // Fallback for older browsers or if clipboard API fails
                alert('Could not copy to clipboard. Please copy the link manually: ' + referralLinkInput.value);
            });
        });
    }
});
