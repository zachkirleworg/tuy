/*
 * Copyright (c) 2018 by Marfeel Solutions (http://www.marfeel.com)
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Marfeel Solutions S.L and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Marfeel Solutions S.L and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Marfeel Solutions SL.
 */

document.whiteCollar = (function () {
    // Put here local variables to avoid polluting the global scope

    return {
        removeDuplicates: true,
        numColumns: 10,
        getItems: [
            {
                selector: '',
                extractors: {
                    title: 'h2 > a',
                    uri: 'h2 > a',
                    media: 'img',
                    excerpt: '',
                    date: '',
                    subtitle: '',
                    author: '',
                    pocket: {}
                },
                modifiers: []
            }
        ],
        modifiers: []
    }
})();