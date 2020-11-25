(() => {
    let windowWidth,
        windowHeight,
        portraitModeName = 'portrait',
        sbsModeName = 'sbs',
        modeName = sbsModeName, // by default
        portraitTypeMainWidth = 'portrait-screen-width',
        portraitTypeMainHeight = 'portrait-screen-height',
        portraitModeType;
    
    window.addEventListener('load', () => {
        init();
        openTextPanel();
        muteVideo();
      });
    
    window.addEventListener('resize', () => { 
        init();
    });

    setWindowParams = () => {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    }
    
    setViewMode = () => {
        let contentBlock,
            ifPortraitMode;
    
        // functions
        checkIfPortraitMode = (contentCurrentHeight) => {
            return windowWidth < contentCurrentHeight * 2 * 0.5625;
        } 
        setPortraitModeType = () => {
            if ( windowWidth / windowHeight < 0.5625 ) {
                portraitModeType = portraitTypeMainWidth
            } else {
                portraitModeType = portraitTypeMainHeight 
            }
        }

        setVariables = () => {
            contentBlock = document.querySelector('.content');
            let videoBlockHeight = document.querySelector('.video-section').clientHeight;
            if (videoBlockHeight <= windowHeight && windowHeight <= videoBlockHeight) {
                ifPortraitMode = checkIfPortraitMode(windowHeight);
            } else {
                ifPortraitMode = checkIfPortraitMode(videoBlockHeight);
            }
        }
    
        
        // logic
        setVariables();

        contentBlock.classList.remove(sbsModeName, portraitModeName, portraitTypeMainWidth, portraitTypeMainHeight);

        if (ifPortraitMode) { 
            modeName = portraitModeName;
            setPortraitModeType();
            contentBlock.classList.add(portraitModeType);
        } else {
            modeName = sbsModeName;
        }
        
        contentBlock.classList.add(modeName);
    };

    openTextPanel = () => {
        const buttonElement = document.querySelector('.js-open-text');
        const textPanelElement = document.querySelector('.text-section');
        buttonElement.addEventListener("click", (e) => {
            textPanelElement.classList.toggle('js-open');
            buttonElement.classList.toggle('js-active');
        });
    }

    muteVideo = () => {
        const buttonElement = document.querySelector('.js-mute');
        buttonElement.addEventListener("click", (e) => {
            buttonElement.classList.toggle('js-active');
            // some code to mute or unmute
        });
    }


    init = () => {
        setWindowParams();
        setViewMode();
    }
})();