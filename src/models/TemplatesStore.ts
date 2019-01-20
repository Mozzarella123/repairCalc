import { types, Instance } from "mobx-state-tree";

export const block = types
  .model("Block", {
    id: types.identifier,
    title: types.string,
    type : types.enumeration(['a','b']),
    content : types.optional(types.string,''),
    tempContent : types.optional(types.string, ''),
    isEditing: types.optional(types.boolean, false)
  })
  .actions(self => ({
    setEditing(value: boolean) {
      self.isEditing = value;
    },
    setContent(value : string) {
      self.content = value;
    },
    setTempContent(value : string) {
      self.tempContent = value;
    }
  }));
export const template = types
  .model("Template", {
    id: types.identifier,
    title: types.string,
    isEditing: types.optional(types.boolean, false),
    blocks: types.optional(types.map(block), {})
  })
  .actions(self => ({
    setBlockEditing(id: string, value: boolean) {
      if (self.blocks.has(id)) {
        self.blocks.get(id).isEditing = value;
      }
    }
  }))
  .views(self => ({
    get editingBlock() {
      const editingBlock = Array.from(self.blocks.values()).filter(
        b => b.isEditing
      );
      return editingBlock.length > 0 ? editingBlock[0] : null;
    }
  }));

const templateStore = types
  .model("TemplateStore", {
    templates: types.map(template),
    currentTemplate: types.maybe(types.reference(template))
  })
  .actions(self => ({
    setCurrentTemplate(id: string) {
      console.log("set" + id);
      if (self.templates.has(id)) {
        self.currentTemplate = self.templates.get(id);
      }
    },
    setIsEditing(id: string, value: boolean) {
      console.log("edit" + id);
      if (self.templates.has(id)) {
        self.currentTemplate = self.templates.get(id);
        self.currentTemplate.isEditing = value;
      }
    }
  }))
  .views(self => ({}));
export type ITemplate = Instance<typeof template>;
export type ITemplateBlock = Instance<typeof block>;
export default templateStore;
