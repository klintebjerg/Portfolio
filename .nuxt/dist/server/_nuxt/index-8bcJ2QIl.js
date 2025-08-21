import { mergeProps, useSSRContext, unref, ref, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { Rewind, Play, FastForward } from "lucide-vue-next";
import "ofetch";
import "C:/Users/mathi/Desktop/SDU/Projects/Portfolio/node_modules/hookable/dist/index.mjs";
import "C:/Users/mathi/Desktop/SDU/Projects/Portfolio/node_modules/unctx/dist/index.mjs";
import "C:/Users/mathi/Desktop/SDU/Projects/Portfolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/mathi/Desktop/SDU/Projects/Portfolio/node_modules/radix3/dist/index.mjs";
import "C:/Users/mathi/Desktop/SDU/Projects/Portfolio/node_modules/defu/dist/defu.mjs";
import "C:/Users/mathi/Desktop/SDU/Projects/Portfolio/node_modules/ufo/dist/index.mjs";
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-9aa65be8><div class="content" data-v-9aa65be8><p class="tagline" data-v-9aa65be8>I build things.</p><h1 class="name" data-v-9aa65be8><span class="highlight" data-v-9aa65be8>Mathias Klintebjerg Phillip</span></h1><p class="subtext" data-v-9aa65be8>Software Engineer</p></div><a href="#content" class="scroll-button" data-v-9aa65be8><span class="material-symbols-rounded" data-v-9aa65be8>arrow_drop_down</span></a></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroIntro.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HeroIntro = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9aa65be8"]]);
const _imports_0 = publicAssetsURL("/images/portfolio.jpeg");
const _sfc_main$5 = {
  __name: "ProfileCard",
  __ssrInlineRender: true,
  props: {
    currentPage: {
      type: String,
      default: "projects"
    }
  },
  emits: ["prev", "next", "play"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleRewind = () => {
      emit("prev");
    };
    const handlePlay = () => {
      emit("play");
    };
    const handleFastForward = () => {
      emit("next");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-card" }, _attrs))} data-v-fb35dc4f><div class="profile-image-container" data-v-fb35dc4f><img${ssrRenderAttr("src", _imports_0)} alt="Mathias K. Phillip" class="profile-image" data-v-fb35dc4f></div><p class="profile-title" data-v-fb35dc4f>Mathias K. Phillip</p><p class="profile-page-indicator" data-v-fb35dc4f>${ssrInterpolate(__props.currentPage === "projects" ? "Projects" : "About Me")}</p><div class="controls" data-v-fb35dc4f>`);
      _push(ssrRenderComponent(unref(Rewind), {
        class: "control-icon rewind",
        onClick: handleRewind
      }, null, _parent));
      _push(ssrRenderComponent(unref(Play), {
        class: "control-icon play",
        onClick: handlePlay
      }, null, _parent));
      _push(ssrRenderComponent(unref(FastForward), {
        class: "control-icon fast-forward",
        onClick: handleFastForward
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProfileCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ProfileCard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-fb35dc4f"]]);
const _sfc_main$4 = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    title: String,
    github: String,
    image: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-card" }, _attrs))} data-v-1ca03ca8><div class="project-image-container" data-v-1ca03ca8><img${ssrRenderAttr("src", `/images/${__props.image || "default-project.jpg"}`)}${ssrRenderAttr("alt", __props.title)} class="project-image" data-v-1ca03ca8></div><div class="project-title" data-v-1ca03ca8>${ssrInterpolate(__props.title)}</div>`);
      if (__props.github) {
        _push(`<a${ssrRenderAttr("href", __props.github)} target="_blank" class="github-link" data-v-1ca03ca8> GitHub </a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ProjectCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-1ca03ca8"]]);
const _sfc_main$3 = {
  __name: "ProjectList",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-scroll-container" }, _attrs))} data-v-13d560d1><div class="project-list" data-v-13d560d1>`);
      _push(ssrRenderComponent(ProjectCard, {
        title: "World of Poaching",
        github: "https://github.com/Nico170f/world-of-zuul",
        image: "world-of-poaching.png"
      }, null, _parent));
      _push(ssrRenderComponent(ProjectCard, {
        title: "DAM system",
        github: "https://github.com/Nico170f/sdu-semesterproject-dam",
        image: "dam-system.png"
      }, null, _parent));
      _push(ssrRenderComponent(ProjectCard, {
        title: "Barspil",
        github: "https://github.com/Nico170f/barspil",
        image: "barspil.png"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProjectList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-13d560d1"]]);
const _sfc_main$2 = {
  __name: "AboutMe",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-me" }, _attrs))} data-v-d0fe6b6c><h2 class="about-heading" data-v-d0fe6b6c>Hej - Jeg hedder Mathias</h2><p class="about-paragraph" data-v-d0fe6b6c> Jeg læser Softwareingeniør på SDU og har en stor interesse for alt, der handler om IT. Jeg kan godt lide at forstå, hvordan ting hænger sammen – og jeg synes det er fedt, når kode ikke bare virker, men giver mening. </p><p class="about-paragraph" data-v-d0fe6b6c> Når jeg ikke sidder med et projekt, laver jeg sport – meget sport. Det er min måde at koble af på og holde energien oppe, og jeg tror på, at balance mellem hoved og krop gør mig bedre til begge dele. </p><p class="about-paragraph" data-v-d0fe6b6c> Denne portfolio er en samling af det, jeg har bygget, lært og leget med – og forhåbentlig også en fornemmelse af, hvem jeg er bag koden. </p><div class="skills-section" data-v-d0fe6b6c><h3 class="skills-heading" data-v-d0fe6b6c>Kompetencer</h3><div class="skills-container" data-v-d0fe6b6c><span class="skill-tag" data-v-d0fe6b6c>Vue.js</span><span class="skill-tag" data-v-d0fe6b6c>C#</span><span class="skill-tag" data-v-d0fe6b6c>Node.js</span><span class="skill-tag" data-v-d0fe6b6c>Python</span><span class="skill-tag" data-v-d0fe6b6c>PostgreSQL</span></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutMe.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AboutMe = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d0fe6b6c"]]);
const _sfc_main$1 = {
  __name: "SectionIndicator",
  __ssrInlineRender: true,
  props: {
    current: String,
    sections: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:current"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-indicator" }, _attrs))} data-v-801010a9><div class="icon-bar" data-v-801010a9><!--[-->`);
      ssrRenderList(__props.sections, (section) => {
        _push(`<button class="${ssrRenderClass(["icon-button", { active: section.id === __props.current }])}"${ssrRenderAttr("title", section.label)} data-v-801010a9><span class="material-symbols-rounded" data-v-801010a9>${ssrInterpolate(section.icon)}</span></button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionIndicator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionIndicator = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-801010a9"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const jumpToPage = (id) => {
      if (id === currentPage.value) return;
      transitionName.value = id === "projects" ? "slide-right" : "slide-left";
      currentPage.value = id;
    };
    const currentPage = ref("projects");
    const transitionName = ref("slide-right");
    const nextPage = () => {
      transitionName.value = "slide-left";
      currentPage.value = currentPage.value === "projects" ? "about" : "projects";
      console.log("Next clicked, current page:", currentPage.value);
    };
    const prevPage = () => {
      transitionName.value = "slide-right";
      currentPage.value = currentPage.value === "about" ? "projects" : "about";
      console.log("Prev clicked, current page:", currentPage.value);
    };
    const resetToProjects = () => {
      transitionName.value = "slide-right";
      currentPage.value = "projects";
      console.log("Reset to projects, current page:", currentPage.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container scroll-smooth" }, _attrs))}>`);
      _push(ssrRenderComponent(HeroIntro, null, null, _parent));
      _push(`<div id="content" class="content-wrapper"><div class="layout"><div class="profile-section">`);
      _push(ssrRenderComponent(ProfileCard, {
        onPrev: prevPage,
        onNext: nextPage,
        onPlay: resetToProjects,
        currentPage: currentPage.value
      }, null, _parent));
      _push(`</div><div class="main-content">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(currentPage.value === "projects" ? ProjectList : AboutMe), { key: currentPage.value }, null), _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(SectionIndicator, {
        current: currentPage.value,
        sections: [
          { id: "projects", label: "Projects", icon: "folder" },
          { id: "about", label: "About Me", icon: "person" }
        ],
        "onUpdate:current": jumpToPage
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-8bcJ2QIl.js.map
