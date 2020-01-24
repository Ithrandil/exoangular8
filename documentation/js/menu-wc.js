'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-stack documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-817e06698cfb504e413e14f8d97a51b0"' : 'data-target="#xs-components-links-module-AppModule-817e06698cfb504e413e14f8d97a51b0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-817e06698cfb504e413e14f8d97a51b0"' :
                                            'id="xs-components-links-module-AppModule-817e06698cfb504e413e14f8d97a51b0"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModalModule.html" data-type="entity-link">LoginModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModalModule-0929271e8361c6c15d5f2a8f5681080d"' : 'data-target="#xs-components-links-module-LoginModalModule-0929271e8361c6c15d5f2a8f5681080d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModalModule-0929271e8361c6c15d5f2a8f5681080d"' :
                                            'id="xs-components-links-module-LoginModalModule-0929271e8361c6c15d5f2a8f5681080d"' }>
                                            <li class="link">
                                                <a href="components/LoginModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoginModalModule-0929271e8361c6c15d5f2a8f5681080d"' : 'data-target="#xs-injectables-links-module-LoginModalModule-0929271e8361c6c15d5f2a8f5681080d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginModalModule-0929271e8361c6c15d5f2a8f5681080d"' :
                                        'id="xs-injectables-links-module-LoginModalModule-0929271e8361c6c15d5f2a8f5681080d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParksModule.html" data-type="entity-link">ParksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ParksModule-9cfb3da45f9cf524a08725d270c137ba"' : 'data-target="#xs-components-links-module-ParksModule-9cfb3da45f9cf524a08725d270c137ba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParksModule-9cfb3da45f9cf524a08725d270c137ba"' :
                                            'id="xs-components-links-module-ParksModule-9cfb3da45f9cf524a08725d270c137ba"' }>
                                            <li class="link">
                                                <a href="components/ParksContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParksContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParksDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParksDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ParksModule-9cfb3da45f9cf524a08725d270c137ba"' : 'data-target="#xs-injectables-links-module-ParksModule-9cfb3da45f9cf524a08725d270c137ba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ParksModule-9cfb3da45f9cf524a08725d270c137ba"' :
                                        'id="xs-injectables-links-module-ParksModule-9cfb3da45f9cf524a08725d270c137ba"' }>
                                        <li class="link">
                                            <a href="injectables/ParksService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ParksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParksRoutingModule.html" data-type="entity-link">ParksRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchBarModule.html" data-type="entity-link">SearchBarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchBarModule-fc2ea4d4ce775aea8a8be549b714969a"' : 'data-target="#xs-components-links-module-SearchBarModule-fc2ea4d4ce775aea8a8be549b714969a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchBarModule-fc2ea4d4ce775aea8a8be549b714969a"' :
                                            'id="xs-components-links-module-SearchBarModule-fc2ea4d4ce775aea8a8be549b714969a"' }>
                                            <li class="link">
                                                <a href="components/SearchBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchPageModule.html" data-type="entity-link">SearchPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchPageModule-12da34090dca8bee612fbbd4fd1f45d5"' : 'data-target="#xs-components-links-module-SearchPageModule-12da34090dca8bee612fbbd4fd1f45d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchPageModule-12da34090dca8bee612fbbd4fd1f45d5"' :
                                            'id="xs-components-links-module-SearchPageModule-12da34090dca8bee612fbbd4fd1f45d5"' }>
                                            <li class="link">
                                                <a href="components/MapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SearchPageModule-12da34090dca8bee612fbbd4fd1f45d5"' : 'data-target="#xs-injectables-links-module-SearchPageModule-12da34090dca8bee612fbbd4fd1f45d5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SearchPageModule-12da34090dca8bee612fbbd4fd1f45d5"' :
                                        'id="xs-injectables-links-module-SearchPageModule-12da34090dca8bee612fbbd4fd1f45d5"' }>
                                        <li class="link">
                                            <a href="injectables/MapService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MapService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchPageRoutingModule.html" data-type="entity-link">SearchPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TermsModule.html" data-type="entity-link">TermsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TermsModule-65976b90ed61f20d9ef8e57a6ad730ff"' : 'data-target="#xs-components-links-module-TermsModule-65976b90ed61f20d9ef8e57a6ad730ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TermsModule-65976b90ed61f20d9ef8e57a6ad730ff"' :
                                            'id="xs-components-links-module-TermsModule-65976b90ed61f20d9ef8e57a6ad730ff"' }>
                                            <li class="link">
                                                <a href="components/TermsContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TermsContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TermsDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TermsModule-65976b90ed61f20d9ef8e57a6ad730ff"' : 'data-target="#xs-injectables-links-module-TermsModule-65976b90ed61f20d9ef8e57a6ad730ff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TermsModule-65976b90ed61f20d9ef8e57a6ad730ff"' :
                                        'id="xs-injectables-links-module-TermsModule-65976b90ed61f20d9ef8e57a6ad730ff"' }>
                                        <li class="link">
                                            <a href="injectables/TermsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TermsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddTerms.html" data-type="entity-link">AddTerms</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditOneTerms.html" data-type="entity-link">EditOneTerms</a>
                            </li>
                            <li class="link">
                                <a href="classes/FreeplacesState.html" data-type="entity-link">FreeplacesState</a>
                            </li>
                            <li class="link">
                                <a href="classes/FreeplacesStateModel.html" data-type="entity-link">FreeplacesStateModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFreeplacesFromDB.html" data-type="entity-link">GetFreeplacesFromDB</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetOneFreeplacesFromStateById.html" data-type="entity-link">GetOneFreeplacesFromStateById</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetOneParksFromStateById.html" data-type="entity-link">GetOneParksFromStateById</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetOneTermsFromStateById.html" data-type="entity-link">GetOneTermsFromStateById</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetParksFromDB.html" data-type="entity-link">GetParksFromDB</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetTermsFromDB.html" data-type="entity-link">GetTermsFromDB</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParksState.html" data-type="entity-link">ParksState</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParksStateModel.html" data-type="entity-link">ParksStateModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveOneTerms.html" data-type="entity-link">RemoveOneTerms</a>
                            </li>
                            <li class="link">
                                <a href="classes/TermsState.html" data-type="entity-link">TermsState</a>
                            </li>
                            <li class="link">
                                <a href="classes/TermsStateModel.html" data-type="entity-link">TermsStateModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomErrorHandler.html" data-type="entity-link">CustomErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapService.html" data-type="entity-link">MapService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParksService.html" data-type="entity-link">ParksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TermsService.html" data-type="entity-link">TermsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/FreeplacesResolve.html" data-type="entity-link">FreeplacesResolve</a>
                            </li>
                            <li class="link">
                                <a href="guards/ParksResolve.html" data-type="entity-link">ParksResolve</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Freeplace.html" data-type="entity-link">Freeplace</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Park.html" data-type="entity-link">Park</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Polygon.html" data-type="entity-link">Polygon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Terms.html" data-type="entity-link">Terms</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});